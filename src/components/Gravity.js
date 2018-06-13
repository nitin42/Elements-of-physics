// @flow

import React from 'react'

import { hoc } from './hoc'
import { getCanvasSize } from '../constants'
import { Magnet } from '../Magnet'
import { FMA } from '../FMA'

import { getGravityProps } from '../props/gravityProps'

import type { instance, dispatch, GravityProps } from '../types'

// Draw the balls on canvas when <Acceleration /> component is used
const drawStuffUsingGravity = (
  p: instance,
  dispatch: dispatch,
  props: GravityProps
) => {
  let magnet
  let rotator

  const setup = () => {
    getCanvasSize(p, props)

    rotator = new FMA(p, props, 1.5, p.width / 2.5, p.height / 2.5)
    magnet = new Magnet(p, props)
  }

  const draw = () => {
    p.background(props.background)

    let gravitationalForce = magnet.attract(rotator)

    rotator.applyForce(gravitationalForce)
    rotator.updatePosition()

    magnet.display()
    rotator.displayBalls()
  }

  const mouseDragged = () => {
    magnet.location.x = p.mouseX
    magnet.location.y = p.mouseY

    // Prevent default behaviour!
    return false
  }

  // Dispatch all the processing core functions
  dispatch([setup, draw, props.move ? mouseDragged : null])
}

export const Gravity = hoc(drawStuffUsingGravity, getGravityProps)

Gravity.displayName = 'Gravity'
