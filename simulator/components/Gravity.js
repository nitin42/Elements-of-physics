// @flow

import { hoc } from './hoc'
import { getCanvasSize } from '../physics/constants'
import { Magnet } from '../physics/Magnet'
import { FMA } from '../physics/FMA'

import { getGravityProps } from '../props/gravityProps'

import type { instance, GravityProps } from '../types'

// Draw the balls on canvas when <Acceleration /> component is used
const drawStuffUsingGravity = (p: instance, props: GravityProps) => {
  let magnet
  let rotator

  p.setup = () => {
    getCanvasSize(p, props)

    rotator = new FMA(p, props, 1.5, p.width / 2.5, p.height / 2.5)
    magnet = new Magnet(p, props)
  }

  p.draw = () => {
    p.background(props.background)

    let gravitationalForce = magnet.attract(rotator)

    rotator.applyForce(gravitationalForce)
    rotator.updatePosition()

    magnet.display()
    rotator.displayBalls()
  }

  if (props.move) {
    p.mouseDragged = () => {
      magnet.location.x = p.mouseX
      magnet.location.y = p.mouseY

      // Prevent default behaviour!
      return false
    }
  }
}

export const Gravity = hoc(drawStuffUsingGravity, getGravityProps)

Gravity.displayName = 'Gravity'
