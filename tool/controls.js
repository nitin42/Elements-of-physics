import React from 'react'
import { SketchPicker } from 'react-color'

import { Consumer } from './context'

export class Controls extends React.Component {
  state = {
    elements: ['Acceleration', 'Force', 'Gravity'],
    currentElement: 'Acceleration'
  }

  renderOptions = () => {
    return this.state.elements.map((element, i) => {
      return (
        <option value={element} key={i}>
          {element}
        </option>
      )
    })
  }

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
                    {this.renderOptions()}
                  </select>
                </li>
                <li>
                  <strong>Color: </strong>
                  <div
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: '4px',
                      backgroundColor: state.color,
                      display: 'inline-block',
                      marginBottom: -4
                    }}
                    onClick={this.props.handleColorPicker}
                  />
                  {state.showColorPicker ? (
                    <div style={{ marginTop: '10px' }}>
                      <SketchPicker
                        color={state.color}
                        onChangeComplete={this.props.handleColorChange}
                      />
                    </div>
                  ) : null}
                </li>
                <li>
                  <strong>Background: </strong>
                  <div
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: '4px',
                      backgroundColor: state.background,
                      display: 'inline-block',
                      marginBottom: -4
                    }}
                    onClick={this.props.handleBackground}
                  />
                  {state.showBackgroundPicker ? (
                    <div style={{ marginTop: '10px' }}>
                      <SketchPicker
                        color={state.background}
                        onChangeComplete={this.props.handleBackgroundChange}
                      />
                    </div>
                  ) : null}
                </li>
                <li>
                  <strong>Size: </strong>
                  <input
                    className="slider"
                    type="range"
                    min="1"
                    max="60"
                    value={state.ballSize}
                    onChange={this.props.handleBallSize}
                  />{' '}
                  {state.ballSize}
                </li>
                <li>
                  <strong>Max. velocity: </strong>
                  <input
                    className="slider"
                    type="range"
                    min="1"
                    max="60"
                    value={state.maxVelocity}
                    onChange={this.props.handleVelocity}
                  />{' '}
                  {state.maxVelocity}
                </li>
                <li>
                  <strong>Balls: </strong>
                  <input
                    className="slider"
                    type="range"
                    min="1"
                    max="1000"
                    value={state.balls}
                    onChange={this.props.handleBallChange}
                  />{' '}
                  {state.balls}
                </li>
                <li>
                  <strong>Friction: </strong>
                  <label className="switch">
                    <input
                      type="checkbox"
                      name="friction"
                      checked={state.friction}
                      onChange={this.props.handleFriction}
                    />
                    <span className="toggle round" />
                  </label>
                </li>
                <li>
                  <strong>Friction coefficient: </strong>
                  <input
                    className="slider"
                    type="range"
                    min="0.1"
                    max="1"
                    step="0.1"
                    value={state.frictionCoefficient}
                    onChange={this.props.handleFrictionCoefficient}
                  />{' '}
                  {state.frictionCoefficient}
                </li>
                <li>
                  <strong>Gravity: </strong>
                  <label className="switch">
                    <input
                      type="checkbox"
                      name="gravity"
                      checked={state.gravity}
                      onChange={this.props.handleGravity}
                    />
                    <span className="toggle round" />
                  </label>
                </li>
                <li>
                  <strong>Drag: </strong>
                  <label className="switch">
                    <input
                      type="checkbox"
                      name="move"
                      checked={state.move}
                      onChange={this.props.handleMove}
                    />
                    <span className="toggle round" />
                  </label>
                </li>
                <li>
                  <strong>Gravitational constant: </strong>
                  <input
                    className="slider"
                    type="range"
                    min="1"
                    max="10"
                    step="1"
                    value={state.gConstant}
                    onChange={this.props.handleGConstant}
                  />{' '}
                  {state.gConstant}
                </li>
                <li>
                  <strong>Apply force: </strong>
                  <i className="fas fa-plus" />
                </li>
              </ul>
            </div>
          </React.Fragment>
        )}
      </Consumer>
    )
  }
}
