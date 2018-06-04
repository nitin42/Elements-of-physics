import PropTypes from 'prop-types'

import { noop } from '../noop'

export const getGravityProps = props => {
  const {
    color,
    gConstant,
    maxVelocity,
    stroke,
    width,
    height,
    measures,
    ballSize,
    extras,
    background,
    ...rest
  } = props
  return rest
}

export const gravityPropTypes = {
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
  extras: PropTypes.func,
  // Gravitational constant
  gConstant: PropTypes.number
}

export const gravityDefaultProps = {
  color: 'hotpink',
  background: 'yellow',
  stroke: 1.5,
  measures: noop,
  extras: noop,
  maxVelocity: 10,
  gConstant: 0.4
}
