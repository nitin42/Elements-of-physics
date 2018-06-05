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
