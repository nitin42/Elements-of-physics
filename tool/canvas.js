import React from 'react'
import ReactDOM from 'react-dom'

import { Consumer } from './context'

import { Acceleration, Force, Gravity } from '../src'
import { isThisSecond } from 'date-fns'

const deferUpdates = ReactDOM.unstable_deferredUpdates

export class Canvas extends React.Component {
  state = { velocity: 0, acceleration: 0, instance: null, value: 1 }

  updateMeasures = ({ acceleration, velocity }) =>
    deferUpdates(() => this.setState({ acceleration, velocity }))

  handleClick = e => this.state.instance.noLoop()

  redraw = e => {
    const value = e.target.value
    deferUpdates(() => this.setState({ value }))
    this.state.instance.redraw(value)
  }

  renderElement = props => {
    if (props.currentElement === 'Force') {
      return (
        <Force
          width={props.width}
          height={props.height}
          color={props.color}
          stroke={0.01}
          balls={props.balls}
          background={props.background}
          maxVelocity={props.maxVelocity}
          friction={props.friction}
          gravity={props.gravity}
          frictionCoefficient={props.frictionCoefficient}
          applyForce={(ball, Vector) => {
            ball.applyForce(new Vector(0.2, 0.5))
          }}
          ballSize={{ width: props.ballSize, height: props.ballSize }}
        />
      )
    } else if (props.currentElement === 'Acceleration') {
      return (
        <Acceleration
          width={props.width}
          height={props.height}
          color={props.color}
          stroke={0.01}
          balls={props.balls}
          maxVelocity={props.maxVelocity}
          background={props.background}
          ballSize={{ width: props.ballSize, height: props.ballSize }}
        />
      )
    } else if (props.currentElement === 'Gravity') {
      return (
        <Gravity
          width={props.width}
          height={props.height}
          color={props.color}
          stroke={0.01}
          gConstant={props.gConstant}
          background={props.background}
          move={props.move}
          ballSize={{ width: props.ballSize, height: props.ballSize }}
        />
      )
    }
  }

  render() {
    return (
      <Consumer>
        {state => {
          return (
            <div style={{ margin: '0 auto' }}>{this.renderElement(state)}</div>
          )
        }}
      </Consumer>
    )
  }
}
