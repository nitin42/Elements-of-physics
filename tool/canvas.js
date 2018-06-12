import React from 'react'
import ReactDOM from 'react-dom'

import { Acceleration, Force, Gravity } from '../src'
import { isThisSecond } from 'date-fns'

const deferUpdates = ReactDOM.unstable_deferredUpdates

export default class Canvas extends React.Component {
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
          color={this.props.color}
          stroke={0.01}
          balls={props.balls}
          background={this.props.background}
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
          color={this.props.color}
          stroke={0.01}
          balls={props.balls}
          maxVelocity={props.maxVelocity}
          background={this.props.background}
          ballSize={{ width: props.ballSize, height: props.ballSize }}
        />
      )
    } else if (props.currentElement === 'Gravity') {
      return (
        <Gravity
          width={props.width}
          height={props.height}
          color={this.props.color}
          stroke={0.01}
          gConstant={props.gConstant}
          background={this.props.background}
          move={this.props.move}
          ballSize={{ width: props.ballSize, height: props.ballSize }}
        />
      )
    }
  }

  render() {
    return (
      <div style={{ margin: '0 auto' }}>{this.renderElement(this.props)}</div>
    )
  }
}
