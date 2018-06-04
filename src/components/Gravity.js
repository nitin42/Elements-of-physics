import React from 'react'

import { hoc } from './hoc'
import { getCanvasSize } from '../constants'
import { Magnet } from '../magnet'
import { FMA } from '../FMA'

import {
  getGravityProps,
  gravityDefaultProps,
  gravityPropTypes
} from '../props/gravityProps'

// Draw the balls on canvas when <Acceleration /> component is used
const drawStuffUsingGravity = (p, dispatch, props) => {
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
  dispatch([setup, draw, mouseDragged])
}

export const Gravity = hoc(drawStuffUsingGravity, getGravityProps)

Gravity.displayName = 'Gravity'

Gravity.propTypes = gravityPropTypes

Gravity.defaultProps = gravityDefaultProps
