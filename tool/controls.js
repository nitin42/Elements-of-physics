import React from 'react'
import { SketchPicker } from 'react-color'

export default class Controls extends React.Component {
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
      <div>
        <h1>Elements of physics</h1>
        <div className="control-center">
          <p
            style={{ textAlign: 'justify', fontSize: '18px', lineHeight: 1.5 }}
          >
            Learn about elements of physics with an interactive simulation.
          </p>
        </div>
        <div style={{ marginTop: '-20px' }}>
          <ul id="horizontal-list">
            <li>
              <strong>Element: </strong>
              <select name="elements" onChange={this.props.handleElementSelect}>
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
                  backgroundColor: this.props.color,
                  display: 'inline-block',
                  marginBottom: -4
                }}
                onClick={this.props.handleColorPicker}
              />
              {this.props.showColorPicker ? (
                <div style={{ marginTop: '10px' }}>
                  <SketchPicker
                    color={this.props.color}
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
                  backgroundColor: this.props.background,
                  display: 'inline-block',
                  marginBottom: -4
                }}
                onClick={this.props.handleBackground}
              />
              {this.props.showBackgroundPicker ? (
                <div style={{ marginTop: '10px' }}>
                  <SketchPicker
                    color={this.props.background}
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
                value={this.props.ballSize}
                onChange={this.props.handleBallSize}
              />{' '}
              {this.props.ballSize}
            </li>
            <li>
              <strong>Max. velocity: </strong>
              <input
                className="slider"
                type="range"
                min="1"
                max="60"
                value={this.props.maxVelocity}
                onChange={this.props.handleVelocity}
              />{' '}
              {this.props.maxVelocity}
            </li>
            <li>
              <strong>Balls: </strong>
              <input
                className="slider"
                type="range"
                min="1"
                max="1000"
                value={this.props.balls}
                onChange={this.props.handleBallChange}
              />{' '}
              {this.props.balls}
            </li>
            <li>
              <strong>Friction: </strong>
              <label className="switch">
                <input
                  type="checkbox"
                  name="friction"
                  checked={this.props.friction}
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
                value={this.props.frictionCoefficient}
                onChange={this.props.handleFrictionCoefficient}
              />{' '}
              {this.props.frictionCoefficient}
            </li>
            <li>
              <strong>Gravity: </strong>
              <label className="switch">
                <input
                  type="checkbox"
                  name="gravity"
                  checked={this.props.gravity}
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
                  checked={this.props.move}
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
                value={this.props.gConstant}
                onChange={this.props.handleGConstant}
              />{' '}
              {this.props.gConstant}
            </li>
            <li>
              <strong>Apply force: </strong>
              <i className="fas fa-plus" />
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
