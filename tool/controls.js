import React from 'react'

import { Consumer } from './context'

import { Slider } from './Slider'
import { CheckBox } from './CheckBox'
import { ColorPicker } from './ColorPicker'
import { Force } from '../src'

const ForceControls = props => (
  <React.Fragment>
    <li>
      <Slider
        name="Balls: "
        min="1"
        max="1000"
        value={props.balls}
        handler={props.handleBallChange}
      />
    </li>
    <li>
      <CheckBox
        name="friction"
        checked={props.friction}
        handler={props.handleFriction}
      />
    </li>
    <li>
      <Slider
        name="Friction coefficient: "
        min="0.1"
        max="1"
        step="0.1"
        value={props.frictionCoefficient}
        handler={props.handleFrictionCoefficient}
      />
    </li>
    <li>
      <CheckBox
        name="gravity"
        checked={props.gravity}
        handler={props.handleGravity}
      />
    </li>
    <li>
      <strong>Apply force: </strong>
      <i className="fas fa-plus" />
    </li>
  </React.Fragment>
)

const AccelerationControls = props => (
  <li>
    <Slider
      name="Balls: "
      min="1"
      max="1000"
      value={props.balls}
      handler={props.handleBallChange}
    />
  </li>
)

const GravityControls = props => (
  <React.Fragment>
    <li>
      <CheckBox name="move" checked={props.move} handler={props.handleMove} />
    </li>
    <li>
      <Slider
        name="Gravitational constant: "
        min="1"
        max="10"
        value={props.gConstant}
        handler={props.handleGConstant}
      />
    </li>
  </React.Fragment>
)

const renderControls = props => {
  if (props.currentElement === 'Force') return <ForceControls {...props} />

  if (props.currentElement === 'Gravity') return <GravityControls {...props} />

  if (props.currentElement === 'Acceleration')
    return <AccelerationControls {...props} />
}

export class Controls extends React.Component {
  render() {
    return (
      <Consumer>
        {state => (
          <React.Fragment>
            <h1>Elements of physics</h1>
            <div className="control-center">
              <p
                style={{
                  textAlign: 'justify',
                  fontSize: '18px',
                  lineHeight: 1.5
                }}
              >
                Learn about elements of physics with an interactive simulation.
              </p>
            </div>
            <div style={{ marginTop: '-20px' }}>
              <ul id="horizontal-list">
                <li>
                  <strong>Element: </strong>
                  <select
                    name="elements"
                    onChange={this.props.handleElementSelect}
                  >
                    {this.props.renderOptions()}
                  </select>
                </li>
                <li>
                  <ColorPicker
                    name="Color: "
                    color={state.color}
                    clickHandler={this.props.handleColorPicker}
                    show={state.showColorPicker}
                    handleColorChange={this.props.handleColorChange}
                  />
                </li>
                <li>
                  <ColorPicker
                    name="Background: "
                    color={state.background}
                    clickHandler={this.props.handleBackground}
                    show={state.showBackgroundPicker}
                    handleColorChange={this.props.handleBackgroundChange}
                  />
                </li>
                <li>
                  <Slider
                    name="Size: "
                    min="1"
                    max="60"
                    value={state.ballSize}
                    handler={this.props.handleBallSize}
                  />
                </li>
                <li>
                  <Slider
                    name="Max. velocity: "
                    min="1"
                    max="60"
                    value={state.maxVelocity}
                    handler={this.props.handleVelocity}
                  />
                </li>
                {renderControls({ ...state, ...this.props })}
              </ul>
            </div>
          </React.Fragment>
        )}
      </Consumer>
    )
  }
}
