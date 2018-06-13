import React from 'react'

import { Acceleration, Force, Gravity } from '../src'
import { Slider } from './Slider'
import { CheckBox } from './CheckBox'

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

export const ForceControls = props => (
  <React.Fragment>
    <li>
      <Slider
        name="Balls: "
        min="1"
        max="1000"
        value={props.balls}
        handler={props.handleBallChange}
      />
    </li>
    <li>
      <CheckBox
        name="friction"
        checked={props.friction}
        handler={props.handleFriction}
      />
    </li>
    <li>
      <Slider
        name="Friction coefficient: "
        min="0.1"
        max="1"
        step="0.1"
        value={props.frictionCoefficient}
        handler={props.handleFrictionCoefficient}
      />
    </li>
    <li>
      <CheckBox
        name="gravity"
        checked={props.gravity}
        handler={props.handleGravity}
      />
    </li>
    <li>
      <span>Apply force: </span>
      <i className="fas fa-plus" />
    </li>
  </React.Fragment>
)

export const AccelerationControls = props => (
  <li>
    <Slider
      name="Balls: "
      min="1"
      max="1000"
      value={props.balls}
      handler={props.handleBallChange}
    />
  </li>
)

export const GravityControls = props => (
  <React.Fragment>
    <li>
      <CheckBox name="move" checked={props.move} handler={props.handleMove} />
    </li>
    <li>
      <Slider
        name="Gravitational constant: "
        min="1"
        max="10"
        value={props.gConstant}
        handler={props.handleGConstant}
        disabled={props.move}
      />
    </li>
  </React.Fragment>
)
