import React from 'react'
import { css } from 'emotion'

import { Consumer } from './context'

import { Slider } from './Slider'
import { CheckBox } from './CheckBox'
import { ColorPicker } from './ColorPicker'
import {
  ForceControls,
  AccelerationControls,
  GravityControls
} from './elements'

const contentStyles = {
  textAlign: 'justify',
  fontSize: '18px',
  lineHeight: 1.5,
  fontWeight: 300
}

// Render extra controls based on currently selected element
const renderControls = props => {
  if (props.currentElement === 'Force') return <ForceControls {...props} />
  if (props.currentElement === 'Gravity') return <GravityControls {...props} />
  if (props.currentElement === 'Acceleration')
    return <AccelerationControls {...props} />
}

const ControlsList = props => (
  <ul id="horizontal-list">
    <li>
      <span>Element: </span>
      <select
        className={css`
          &:focus {
            outline-color: ${props.color};
          }
        `}
        name="elements"
        onChange={props.handleElementSelect}
      >
        {props.renderOptions()}
      </select>
    </li>
    <li>
      <ColorPicker
        name="Color: "
        color={props.color}
        clickHandler={props.handleColorPicker}
        show={props.showColorPicker}
        handleColorChange={props.handleColorChange}
      />
    </li>
    <li>
      <ColorPicker
        name="Background: "
        color={props.background}
        clickHandler={props.handleBackground}
        show={props.showBackgroundPicker}
        handleColorChange={props.handleBackgroundChange}
      />
    </li>
    <li>
      <Slider
        name="Size: "
        min="1"
        max="60"
        value={props.ballSize}
        disabled={props.move}
        handler={props.handleBallSize}
      />
    </li>
    <li>
      <Slider
        name="Max. velocity: "
        min="1"
        max="60"
        value={props.maxVelocity}
        handler={props.handleVelocity}
        disabled={props.move}
      />
    </li>
    {renderControls(props)}
  </ul>
)

// Render the controls for controlling friction, gravity, acceleration and customizing canvas
// State exposed by Consumer here is <Layout /> component's state
export const Controls = props => (
  <Consumer>
    {state => (
      <React.Fragment>
        <h1 className="heading">Elements of physics</h1>
        <div className="control-center">
          <p style={contentStyles}>
            Learn about elements of physics with an interactive simulation.
          </p>
        </div>
        <div style={{ marginTop: '10px' }}>
          <ControlsList {...state} {...props} />
        </div>
      </React.Fragment>
    )}
  </Consumer>
)
