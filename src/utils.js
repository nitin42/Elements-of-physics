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

  // Static methods here return a new vector

  static sub(v1, v2) {
    return new Vector(v1.x - v2.x, v1.y - v2.y)
  }

  static add(v1, v2) {
    return new Vector(v1.x + v2.x, v1.y + v2.y)
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

  // Do not cross the edges
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

  // Draw the balls 😅
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
