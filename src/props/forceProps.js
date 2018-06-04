import PropTypes from 'prop-types'

import { noop } from '../noop'

export const getForcesProps = props => {
  const {
    balls,
    color,
    background,
    stroke,
    width,
    height,
    ballSize,
    measures,
    extras,
    applyForce,
    gravity,
    frictionCoefficient,
    maxVelocity,
    friction,
    ...rest
  } = props
  return rest
}

export const forcePropTypes = {
  // Number of balls in the canvas
  balls: PropTypes.number,
  // Background color of the canvas
  background: PropTypes.string,
  // Color of the ball
  color: PropTypes.string,
  // Stroke weight of the ball
  stroke: PropTypes.number,
  // Width of canvas
  width: PropTypes.number,
  // Height of canvas
  height: PropTypes.number,
  // Max speed of the ball
  maxVelocity: PropTypes.number,
  // Ball size
  ballSize: PropTypes.shape({
    // Width of ball (ellipse)
    width: PropTypes.number,
    // Height of ball (ellipse)
    height: PropTypes.number
  }),
  // Callback that receives acceleration, velocity values
  measures: PropTypes.func,
  // Callback that receives processing instance to do some extra stuff outside the loop
  extras: PropTypes.func,
  // Callback function to apply additional force to an object
  applyForce: PropTypes.func,
  // Boolean to toggle gravitational force (all objects hit the ground with same acceleration if this is enabled)
  gravity: PropTypes.bool,
  // Coefficient of friction (higher its value, more is the friction)
  frictionCoefficient: PropTypes.number,
  // Boolean to toggle friction
  friction: PropTypes.bool
}

export const forceDefaultProps = {
  balls: 30,
  color: 'hotpink',
  background: 'yellow',
  stroke: 1.5,
  ballSize: { width: 20, height: 20 },
  measures: noop,
  extras: noop,
  applyForce: noop,
  gravity: false,
  frictionCoefficient: 0.04,
  friction: false
}
