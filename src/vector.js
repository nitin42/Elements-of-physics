/**
 * Acceleration and vectors
 *
 * Acceleration is defined as change of velocity and change of location is defined as velocity, hence we can draw objects on a canvas on different locations based on velocity and acc.
 * Vector have a magnitude and direction unlike scalar quantity.
 */

export class Vector {
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
