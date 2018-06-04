import { Vector } from './vector'

export class DrawBalls {
  constructor(instance, props) {
    // Processing instance
    this.instance = instance
    // Component props
    this.props = props
    // Location of a ball on canvas
    this.loc = new Vector(
      Math.random(this.instance.width / 2),
      Math.random(this.instance.height / 2)
    )
    // Initial velocity of moving ball
    this.velocity = new Vector(0, 0)
    // Acceleration of the ball
    this.acc = new Vector(-0.001, 0.01)
  }

  updatePosition() {
    // Create a new vector using mouse events
    this.mouse = new Vector(this.instance.mouseX, this.instance.mouseY)

    // Calculate the distance of the above vector from the center of canvas
    this.dir = Vector.sub(this.mouse, this.loc)

    // Calculate its unit vector
    this.dir.normalize()

    // Scale it by 0.5 units
    this.dir.mult(0.5)

    // Changing location is velocity and changing velocity is acceleration, hence:
    // Assuming the mass is 1 (in pixel world, so F=A)
    this.acc = this.dir

    // Changing velocity (acc)
    this.velocity.add(this.acc)

    // Limit the velocity vector magnitude
    this.velocity.limit(this.props.maxVelocity)

    // Changing location is velocity hence balls appeared to be moving
    this.loc.add(this.velocity)

    // Invoke the measures callback from component
    this.props.measures &&
      this.props.measures({
        velocity: Number(this.loc.x - this.loc.y).toFixed(2),
        acceleration: Number(this.velocity.x - this.velocity.y).toFixed(2)
      })
  }

  hasCrossedEdge() {
    if (this.loc.x > this.instance.width) {
      this.loc.x = 0
    } else if (this.loc.x < 0) {
      this.loc.x = this.instance.width
    }

    if (this.loc.y > this.instance.height) {
      this.loc.y = 0
    } else if (this.loc.y < 0) {
      this.loc.y = this.instance.height
    }
  }

  displayBalls() {
    this.instance.strokeWeight(this.props.stroke)
    this.instance.fill(this.props.color)
    this.instance.ellipse(
      this.loc.x,
      this.loc.y,
      this.props.ballSize.width,
      this.props.ballSize.height
    )
  }
}
