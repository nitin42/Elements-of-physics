// @flow

import { hoc } from './hoc'
import { DEFAULT_BALLS, getCanvasSize } from '../physics/constants'
import { Ball } from '../physics/Ball'
import { getAccelerationProps } from '../props/accelerationProps'

import type { instance, AccelerationProps } from '../types'

// Draw the balls on canvas when <Acceleration /> component is used
const drawStuffUsingAcceleration = (p: instance, props: AccelerationProps) => {
  const balls = new Array(Number(props.balls) || DEFAULT_BALLS)

  p.setup = () => {
    getCanvasSize(p, props)

    for (let i = 0; i < balls.length; i++) {
      balls[i] = new Ball(p, props)
    }
  }

  p.draw = () => {
    p.background(props.background)

    for (let i = 0; i < balls.length; i++) {
      balls[i].updatePosition()
      balls[i].hasCrossedEdge()
      balls[i].displayBalls()
    }
  }
}

export const Acceleration = hoc(
  drawStuffUsingAcceleration,
  getAccelerationProps
)

Acceleration.displayName = 'Acceleration'
