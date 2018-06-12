import React from 'react'

import { Acceleration, Force, Gravity } from '../src'

export const ForceCanvas = props => (
  <Force
    width={props.width}
    height={props.height}
    color={props.color}
    stroke={0.01}
    balls={props.balls}
    background={props.background}
    maxVelocity={props.maxVelocity}
    friction={props.friction}
    gravity={props.gravity}
    frictionCoefficient={props.frictionCoefficient}
    applyForce={(ball, Vector) => {
      ball.applyForce(new Vector(0.2, 0.5))
    }}
    ballSize={{ width: props.ballSize, height: props.ballSize }}
  />
)

export const AccelerationCanvas = props => (
  <Acceleration
    width={props.width}
    height={props.height}
    color={props.color}
    stroke={0.01}
    balls={props.balls}
    maxVelocity={props.maxVelocity}
    background={props.background}
    ballSize={{ width: props.ballSize, height: props.ballSize }}
  />
)

export const GravityCanvas = props => (
  <Gravity
    width={props.width}
    height={props.height}
    color={props.color}
    stroke={0.01}
    gConstant={props.gConstant}
    background={props.background}
    move={props.move}
    ballSize={{ width: props.ballSize, height: props.ballSize }}
  />
)
