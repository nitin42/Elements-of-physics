// @flow

import React from 'react'

import { hoc } from './hoc'
import { DEFAULT_BALLS, getCanvasSize } from '../constants'
import { DrawBalls } from '../Ball'
import { getAccelerationProps } from '../props/accelerationProps'

import type { instance, dispatch, AccelerationProps } from '../types'

// Draw the balls on canvas when <Acceleration /> component is used
const drawStuffUsingAcceleration = (
  p: instance,
  dispatch: dispatch,
  props: AccelerationProps
) => {
  const balls = new Array(props.balls || DEFAULT_BALLS)

  const setup = () => {
    getCanvasSize(p, props)

    for (let i = 0; i < balls.length; i++) {
      balls[i] = new DrawBalls(p, props)
    }
  }

  const draw = () => {
    p.background(props.background)

    for (let i = 0; i < balls.length; i++) {
      balls[i].updatePosition()
      balls[i].hasCrossedEdge()
      balls[i].displayBalls()
    }
  }

  // Dispatch all the processing core functions
  dispatch([setup, draw])
}

export const Acceleration = hoc(
  drawStuffUsingAcceleration,
  getAccelerationProps
)

Acceleration.displayName = 'Acceleration'
