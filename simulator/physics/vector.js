// @flow

/**
 * Acceleration and vectors
 *
 * Acceleration is defined as change of velocity and change of location is defined as velocity, hence we can draw objects on a canvas on different locations based on velocity and acc.
 * Vector have a magnitude and direction unlike scalar quantity.
 */

export class Vector {
  x: number
  y: number

  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }

  // Static methods are useful for returning new vectors

  static sub(v1: Vector, v2: Vector): Vector {
    return new Vector(v1.x - v2.x, v1.y - v2.y)
  }

  static add(v1: Vector, v2: Vector): Vector {
    return new Vector(v1.x + v2.x, v1.y + v2.y)
  }

  static div(v: Vector, n: number): Vector {
    return new Vector(v.x / n, v.y / n)
  }

  static mult(v: Vector, n: number): Vector {
    return new Vector(v.x * n, v.y * n)
  }

  // Add two vectors
  add(pVect: Vector) {
    this.x = this.x + pVect.x
    this.y = this.y + pVect.y
  }

  // Subtract two vectors
  sub(pVect: Vector) {
    this.x = this.x - pVect.x
    this.y = this.y - pVect.y
  }

  // Scale a vector (normalized) by n units
  mult(n: number) {
    this.x = this.x * n
    this.y = this.y * n
  }

  // Reduce a vector (normalized) by n units
  div(n: number) {
    this.x = this.x / n
    this.y = this.y / n
  }

  // Calculating the magnitude of a vector
  mag(): number {
    return Math.sqrt(this.x * this.x + this.y * this.y)
  }

  // Unit vector
  normalize() {
    let m = this.mag()

    if (m !== 0) {
      this.div(m)
    }
  }

  // Limit the magnitude of a vector by m units
  limit(m: number) {
    if (this.mag() > m) {
      this.normalize()
      this.mult(m)
    }
  }
}
