import PropTypes from 'prop-types'

import { noop } from '../noop'

export const getAccelerationProps = props => {
  const {
    balls,
    maxVelocity,
    color,
    stroke,
    width,
    height,
    ballSize,
    measures,
    extras,
    background,
    ...rest
  } = props
  return rest
}

export const accelerationPropTypes = {
  // Number of balls in the canvas
  balls: PropTypes.number,
  // Background color of the canvas
  background: PropTypes.string,
  // Color of the ball
  color: PropTypes.string,
  // Max speed of the ball
  maxVelocity: PropTypes.number,
  // Stroke weight of the ball
  stroke: PropTypes.number,
  // Width of canvas
  width: PropTypes.number,
  // Height of canvas
  height: PropTypes.number,
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
  extras: PropTypes.func
}

export const accelerationDefaultProps = {
  balls: 30,
  color: 'hotpink',
  background: 'yellow',
  stroke: 1.5,
  ballSize: { width: 20, height: 20 },
  measures: noop,
  extras: noop,
  maxVelocity: 10
}
