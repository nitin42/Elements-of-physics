// @flow

import { Vector } from './vector'
import { FMA } from './FMA'

import type { instance, GravityProps } from '../types'

// Gravitational force (force of attraction)
export class Magnet {
  instance: instance
  props: GravityProps
  location: Vector
  mass: number
  G: number

  constructor(instance: instance, props: GravityProps) {
    this.instance = instance
    this.props = props
    this.location = new Vector(
      this.instance.width / 2,
      this.instance.height / 2
    )
    this.mass = 20
    this.G = this.props.gConstant || 0.4
  }

  attract(rotator: FMA) {
    let force = Vector.sub(this.location, rotator.location)
    let distance = force.mag()

    distance = this.instance.constrain(distance, 5.0, 10.0)

    force.normalize()

    let strength = (this.G * this.mass * rotator.mass) / (distance * distance)
    force.mult(strength)
    return force
  }

  display() {
    const offset = this.props.ballSize.width / 9

    this.instance.strokeWeight(this.props.stroke)
    this.instance.fill(this.props.color)
    this.instance.ellipse(
      this.location.x,
      this.location.y,
      this.mass * offset,
      this.mass * offset
    )
  }
}
