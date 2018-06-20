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
    move,
    ...rest
  } = props
  return rest
}
