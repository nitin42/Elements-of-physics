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
    magnitude,
    ...rest
  } = props
  return rest
}
