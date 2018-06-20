// @flow

import { Vector } from './vector'

import type { instance, ForceProps, GravityProps } from '../types'

import {
  DEFAULT_BALL_COLOR,
  DEFAULT_MAX_VELOCITY,
  DEFAULT_STROKE_WEIGHT
} from './constants'

// Draw the balls using laws of motion (force = mass x acceleration)
export class FMA {
  instance: instance
  props: ForceProps | GravityProps
  mass: number
  xPos: number
  yPos: number
  location: Vector
  velocity: Vector
  acc: Vector
  force: Vector

  constructor(
    instance: instance,
    props: ForceProps | GravityProps,
    mass: number,
    xPos: number,
    yPos: number
  ) {
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

  getVelocity() {
    return new Vector(this.velocity.x, this.velocity.y)
  }

  // Apply a certain force to a ball (can be gravity, wind, ...)
  applyForce(f: Vector) {
    // Determine the acceleration
    // Here, acceleration is equal to force because we have assume the amount of matter (pixels) to be 1. So the mass is one, hence F=A
    this.force = Vector.div(f, this.mass)
    // Add up the acceleration (net force)
    this.acc.add(this.force)
  }

  updatePosition() {
    // Change of velocity
    this.velocity.add(this.acc)

    this.velocity.limit(this.props.maxVelocity || DEFAULT_MAX_VELOCITY)

    // Change of location
    this.location.add(this.velocity)

    // Invoke the measures callback from component
    this.props.measures &&
      this.props.measures({
        velocity: Number(this.location.x - this.location.y).toFixed(2),
        acceleration: Number(this.velocity.x - this.velocity.y).toFixed(2)
      })

    // Set the acceleration to zero (Newton's first law). This causes the ball to move with constant velocity in an equilibrium state.
    this.acc.mult(0)
  }

  displayBalls() {
    this.instance.strokeWeight(this.props.stroke || DEFAULT_STROKE_WEIGHT)
    this.instance.fill(this.props.color || DEFAULT_BALL_COLOR)
    this.instance.ellipse(
      this.location.x,
      this.location.y,
      this.mass * this.props.ballSize.width,
      this.mass * this.props.ballSize.height
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
