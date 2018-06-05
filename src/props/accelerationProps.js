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
