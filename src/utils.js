/**
 * Acceleration and vectors
 *
 * Acceleration is defined as change of velocity and location is defined as change of velocity, hence we can draw objects on a canvas on different locations based on speed and acc.
 * Vector have a magnitude and direction unlike scalar quantity.
 */

class Vector {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  // Static methods are useful for returning new vectors

  static sub(v1, v2) {
    return new Vector(v1.x - v2.x, v1.y - v2.y)
  }

  static add(v1, v2) {
    return new Vector(v1.x + v2.x, v1.y + v2.y)
  }

  static div(v, n) {
    return new Vector(v.x / n, v.y / n)
  }

  static mult(v, n) {
    return new Vector(v.x * n, v.y * n)
  }

  // Add two vectors
  add(pVect) {
    this.x = this.x + pVect.x
    this.y = this.y + pVect.y
  }

  // Subtract two vectors
  sub(pVect) {
    this.x = this.x - pVect.x
    this.y = this.y - pVect.y
  }

  // Scale a vector (normalized) by n units
  mult(n) {
    this.x = this.x * n
    this.y = this.y * n
  }

  // Reduce a vector (normalized) by n units
  div(n) {
    this.x = this.x / n
    this.y = this.y / n
  }

  // Calculating the magnitude of a vector
  mag() {
    return Math.sqrt(this.x * this.x + this.y * this.y)
  }

  // Unit vector
  normalize() {
    let m = this.mag()

    if (m != 0) {
      this.div(m)
    }
  }

  // Limit the magnitude of a vector by m units
  limit(m) {
    if (this.mag() > m) {
      this.normalize()
      this.mult(m)
    }
  }
}

class DrawBalls {
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
    this.speed = new Vector(0, 0)
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
    this.acc = this.dir

    // Changing velocity (acc)
    this.speed.add(this.acc)

    // Limit the velocity vector magnitude
    this.speed.limit(this.props.maxSpeed)

    // Changing location is velocity hence balls appeared to be moving
    this.loc.add(this.speed)

    // Invoke the measures callback from component
    this.props.measures &&
      this.props.measures({
        velocity: Number(this.loc.x - this.loc.y).toFixed(2),
        acceleration: Number(this.speed.x - this.speed.y).toFixed(2)
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

// Draw the balls using laws of motion (force = mass x acceleration)
export class FMA {
  constructor(instance, props, mass, xPos, yPos) {
    // Location of ball
    this.location = new Vector(xPos, yPos)
    // Velocity of ball
    this.velocity = new Vector(0, 0)
    // Acceleration of ball
    this.acc = new Vector(-0.001, 0.01)
    // Mass of a ball
    this.mass = mass
    // Component props
    this.props = props
    // Processing instance
    this.instance = instance
  }

  // Apply a certain force to a ball (can be gravity, wind, ...)
  applyForce(f) {
    // Determine the acceleration
    // Here, acceleration is equal to force because we have assume the amount of matter (pixels) to be 1. So the mass is one, hence F=A
    this.force = Vector.div(f, this.mass)
    // Add up the acceleration (net force)
    this.acc.add(this.force)
  }

  updatePosition() {
    // Change of velocity
    this.velocity.add(this.acc)
    // Change of location
    this.location.add(this.velocity)

    // Set the acceleration to zero (Newton's first law). This causes the ball to move with constant velocity in an equilibrium state.
    this.acc.mult(0)
  }

  displayBalls() {
    this.instance.strokeWeight(this.props.stroke)
    this.instance.fill(this.props.color)
    this.instance.ellipse(
      this.location.x,
      this.location.y,
      this.mass * this.props.ballSize.width || 20,
      this.mass * this.props.ballSize.height || 20
    )
  }

  hasCrossedEdge() {
    if (this.location.x > this.instance.width) {
      this.location.x = this.instance.width
      this.velocity.x *= -1
    } else if (this.location.x < 0) {
      this.velocity.x *= -1
      this.location.x = 0
    }

    if (this.location.y > this.instance.height) {
      this.location.y = this.instance.height
      this.velocity.y *= -1
    }
  }
}

// Receives p5 instance and a callback to draw the stuff on canvas
export const p5Renderer = (instance, callback, props) => {
  // Dispatches all the processing functions
  const dispatch = fns => {
    fns.forEach(fn => {
      if (typeof fn === 'function') {
        instance[fn.name] = fn
      }
    })
  }

  callback(instance, dispatch, props)
}

export { Vector, DrawBalls }
