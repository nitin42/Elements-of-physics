// @flow

// Processing.js instance
export type instance = Object

// Common props for the components
export type commonProps = {
  // Background color of the canvas
  background: string,
  // Color of the ball
  color: string,
  // Stroke weight of the ball
  stroke: number,
  // Width of canvas
  width: number,
  // Height of canvas
  height: number,
  // Max speed of the ball
  maxVelocity: number,
  // Ball size
  ballSize: {
    // Width of ball (ellipse)
    width: number,
    // Height of ball (ellipse)
    height: number
  },
  // Callback that receives acceleration, velocity values
  measures: Function,
  // Callback that receives processing instance to do some extra stuff outside the loop
  extras: Function
}

// Props for <Force /> component
export type ForceProps = {
  // Number of balls in the canvas
  balls: number,
  ...$Exact<commonProps>,
  // Callback function to apply additional force to an object
  applyForce: Function,
  // Boolean to toggle gravitational force (all objects hit the ground with same acceleration if this is enabled)
  gravity: boolean,
  // Coefficient of friction (higher its value, more is the friction)
  frictionCoefficient: number,
  // Boolean to toggle friction
  friction: boolean
}

// Props for <Acceleration /> component
export type AccelerationProps = {
  // Number of balls in the canvas
  balls: number,
  magnitude: number,
  ...$Exact<commonProps>
}

// Props for <Gravity /> component
export type GravityProps = {
  // Gravitational constant
  gConstant: number,
  // For dragging the center ball
  move: boolean,
  ...$Exact<commonProps>
}

export type mixedProps = GravityProps | ForceProps | AccelerationProps

// Processing core callbacks
type dispatchCallback = () => void | boolean

// Dispatch function batches all the processing core functions
export type dispatch = (args: Array<dispatchCallback | null>) => void

// Core draw function for drawing stuff when Gravity component is used
export type gravityStuff = (
  p: instance,
  dispatch: dispatch,
  props: GravityProps
) => void

// Core draw function for drawing stuff when Force component is used
export type forceStuff = (
  p: instance,
  dispatch: dispatch,
  props: ForceProps
) => void

// Core draw function for drawing stuff when Acceleration component is used
export type accelerationStuff = (
  p: instance,
  dispatch: dispatch,
  props: AccelerationProps
) => void

// Returns the rest props
export type propsGetter = (props: mixedProps) => Object

export type drawStuff = accelerationStuff | forceStuff | gravityStuff
