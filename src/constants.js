// @flow

import type { instance, mixedProps } from './types'

// Default value for number of balls
export const DEFAULT_BALLS = 10

// Default height of the canvas
export const DEFAULT_HEIGHT = 640

// Default width of the canvas
export const DEFAULT_WIDTH = 1024

export const getCanvasSize = (instance: instance, props: mixedProps): void =>
  instance.createCanvas(
    props.width || DEFAULT_WIDTH,
    props.height || DEFAULT_HEIGHT
  )

// Max velocity of the ball
export const DEFAULT_MAX_VELOCITY = 10

// Stroke weight for all the balls
export const DEFAULT_STROKE_WEIGHT = 1.2

export const DEFAULT_BALL_COLOR = 'mistyrose'

export const DEFAULT_BALL_WIDTH = 30

export const DEFAULT_BALL_HEIGHT = 30
