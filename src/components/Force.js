import React from 'react'

import { hoc } from './hoc'
import { DEFAULT_BALLS, DEFAULT_HEIGHT, DEFAULT_WIDTH } from '../constants'
import { Vector } from '../vector'
import { FMA } from '../FMA'
import {
  forceDefaultProps,
  forcePropTypes,
  getForcesProps
} from '../props/forceProps'

// Draw the balls on canvas when <Force /> component is used
const drawStuffUsingForces = (p, dispatch, props) => {
  const balls = new Array(props.balls || DEFAULT_BALLS)

  const setup = () => {
    p.createCanvas(props.width || DEFAULT_WIDTH, props.height || DEFAULT_HEIGHT)

    for (let i = 0; i < balls.length; i++) {
      balls[i] = new FMA(p, props, Math.random(10, 20), 0, 0)
    }
  }

  const draw = () => {
    p.background(props.background)

    for (let i = 0; i < balls.length; i++) {
      const wind = new Vector(0.001, 0)
      let gravity

      // Gravitational force is scaled according to the mass of a ball. So the ball hit the ground with same acceleration.
      // Gravity - The force that pulls together all the matter
      if (props.gravity) {
        const mass = balls[i].mass
        gravity = new Vector(0, 0.1 * mass)
      } else {
        gravity = new Vector(0, 0.1)
      }

      // Friction - Force that reduces the energy of a system while the object is in motion.
      if (props.friction) {
        // Friction = -uNV(unit vector)
        // negative sign indicates that the frictional force always acts in the opposite direction
        const friction = balls[i].getVelocity()
        // Determines the strength of friction
        const coefficientOfFriction = props.frictionCoefficient || 0.01

        // friction force acts in opposite direction, so ...
        friction.mult(-1)
        // Calculate the unit vector
        friction.normalize()
        // higher its value, more friction
        friction.mult(coefficientOfFriction)
        // Apply frictional force
        balls[i].applyForce(friction)
      }

      balls[i].applyForce(wind)
      balls[i].applyForce(gravity)

      props.applyForce && props.applyForce(balls[i], Vector)

      balls[i].updatePosition()
      balls[i].hasCrossedEdge()
      balls[i].displayBalls()
    }
  }

  // Dispatch all the processing core functions
  dispatch([setup, draw])
}

export const Force = hoc(drawStuffUsingForces, getForcesProps)

Force.displayName = 'Force'

Force.defaultProps = forceDefaultProps

Force.propTypes = forcePropTypes
