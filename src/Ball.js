// @flow

import { Vector } from './vector'

import type { instance, AccelerationProps } from './types'

import {
  DEFAULT_BALL_COLOR,
  DEFAULT_BALL_HEIGHT,
  DEFAULT_MAX_VELOCITY,
  DEFAULT_BALL_WIDTH,
  DEFAULT_STROKE_WEIGHT
} from './constants'

export class DrawBalls {
  // Processing instance
  instance: instance
  // Component props
  props: AccelerationProps
  // Location of a ball on canvas
  loc: Vector
  // Initial velocity of moving ball
  velocity: Vector
  // Acceleration of the ball
  acc: Vector
  // Create a new vector using mouse events
  mouse: Vector
  // distance of the mouse vector from the center of canvas
  dir: Vector

  constructor(instance: instance, props: AccelerationProps) {
    this.instance = instance
    this.props = props
    // $FlowFixMe
    this.loc = new Vector(
      Math.random(this.instance.width / 2),
      Math.random(this.instance.height / 2)
    )
    this.velocity = new Vector(0, 0)
    this.acc = new Vector(-0.001, 0.01)
  }

  updatePosition() {
    this.mouse = new Vector(this.instance.mouseX, this.instance.mouseY)

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
    this.velocity.limit(this.props.maxVelocity || DEFAULT_MAX_VELOCITY)

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
    this.instance.strokeWeight(this.props.stroke || DEFAULT_STROKE_WEIGHT)
    this.instance.fill(this.props.color || DEFAULT_BALL_COLOR)
    this.instance.ellipse(
      this.loc.x,
      this.loc.y,
      this.props.ballSize.width || DEFAULT_BALL_WIDTH,
      this.props.ballSize.height || DEFAULT_BALL_HEIGHT
    )
  }
}
