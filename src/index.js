import React from 'react'

const p5 = require('p5')

import { DrawBalls, p5Renderer, Vector, FMA } from './utils'

const DEFAULT_BALLS = 10

const DEFAULT_HEIGHT = 640

const DEFAULT_WIDTH = 1024

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
      const wind = new Vector(0.01, 0)
      const gravity = new Vector(0, 0.1)

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

const drawStuffUsingAcceleration = (p, dispatch, props) => {
  const balls = new Array(props.balls || 20)

  const setup = () => {
    p.createCanvas(props.width, props.height)

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

const hoc = (drawStuffFn, propsGetter) =>
  class extends React.Component {
    componentDidMount() {
      this.getCanvas()
    }

    renderer = p => p5Renderer(p, drawStuffFn, this.props)

    getCanvas = () =>
      new p5(p => {
        this.renderer(p)

        // Do some extra stuff here with processing
        this.props.extras && this.props.extras(p)
      }, this.wrapper)

    render() {
      return (
        <div
          ref={wrapper => (this.wrapper = wrapper)}
          {...propsGetter(this.props)}
        />
      )
    }
  }

const getForcesProps = props => {
  const {
    balls,
    color,
    stroke,
    width,
    height,
    ballSize,
    measures,
    extras,
    applyForce,
    ...rest
  } = props
  return rest
}

const getAccelerationProps = props => {
  const {
    balls,
    maxSpeed,
    color,
    stroke,
    width,
    height,
    ballSize,
    measures,
    extras,
    ...rest
  } = props
  return rest
}

export const Forces = hoc(drawStuffUsingForces, getForcesProps)

export const Acceleration = hoc(
  'div',
  drawStuffUsingAcceleration,
  getAccelerationProps
)
