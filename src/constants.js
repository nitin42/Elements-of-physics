// Default value for number of balls
export const DEFAULT_BALLS = 10

// Default height of the canvas
export const DEFAULT_HEIGHT = 640

// Default width of the canvas
export const DEFAULT_WIDTH = 1024

export const getCanvasSize = (instance, props) =>
  instance.createCanvas(
    props.width || DEFAULT_WIDTH,
    props.height || DEFAULT_HEIGHT
  )
