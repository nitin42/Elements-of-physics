import React from 'react'
import Modal from 'react-responsive-modal'
import ReactTooltip from 'react-tooltip'

import { Acceleration, Force, Gravity } from '../'
import { Slider } from './Slider'
import { CheckBox } from './CheckBox'

export const ForceCanvas = props => (
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
      // User define apply force vectors
      if (props.fnArr.length !== 0 && props.valArr.length !== 0) {
        props.fnArr.forEach(fn => {
          props.valArr.forEach(val => {
            fn(ball, Vector, val.x, val.y)
          })
        })
      }
    }}
    ballSize={{ width: props.ballSize, height: props.ballSize }}
  />
)

export const AccelerationCanvas = props => (
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

export const GravityCanvas = props => (
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

export const ForceControls = props => (
  <React.Fragment>
    <li>
      <Slider
        name="Balls: "
        min="1"
        max="1000"
        value={props.balls}
        handler={props.handleBallChange}
        tip="Set number of balls to be drawn on the canvas"
      />
    </li>
    <li>
      <CheckBox
        name="friction"
        checked={props.friction}
        handler={props.handleFriction}
        tip="Enable friction"
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
        tip="Set a value for friction coefficient."
      />
    </li>
    <li>
      <CheckBox
        name="gravity"
        checked={props.gravity}
        handler={props.handleGravity}
        tip="Enable gravity"
      />
    </li>
    <li>
      <span>Apply force: </span>
      <i
        className="fas fa-plus-circle"
        style={{ cursor: 'pointer' }}
        onClick={props.toggleModal}
        data-tip="Add a vector for applying force on a ball"
      />
      <ul className="vector-list">
        {props.valArr.map((vector, key) => {
          if (vector.x === 0 && vector.y === 0) {
          } else {
            return (
              <li className="vector-animation" key={key}>
                <strong>
                  F<sub>{key + 1}&nbsp;&nbsp;</sub>-&nbsp;
                </strong>
                {vector.x}x + {vector.y}y&nbsp;&nbsp;
                <i
                  className="fas fa-minus-circle minus-icon"
                  id="vector-list"
                  onClick={e => props.deleteVectors(key)}
                />
              </li>
            )
          }
        })}
      </ul>
      <Modal
        open={props.isModalOpen}
        onClose={props.toggleModal}
        classNames={{ modal: 'modal' }}
      >
        <div>
          <p>
            A force is a vector that causes an object with mass to accelerate.
            Let's define a vector with ball position x and y. Example - 0.1x +
            0.4y
          </p>
          <div className="vector-input">
            &nbsp;<input
              type="text"
              value={props.xVec}
              onChange={props.updateXVec}
            />x &nbsp;and&nbsp;&nbsp;<input
              type="text"
              value={props.yVec}
              onChange={props.updateYVec}
            />y
          </div>
          <p>
            After you've have defined the vector, a force with this vector will
            be applied on each ball. Click the below button to see the effect of
            force on each ball.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button className="vector-button" onClick={props.updateVector}>
              Apply vector
            </button>
          </div>
        </div>
      </Modal>
    </li>
    <ReactTooltip place="right" effect="float" />
  </React.Fragment>
)

export const AccelerationControls = props => (
  <li>
    <Slider
      name="Balls: "
      min="1"
      max="1000"
      value={props.balls}
      handler={props.handleBallChange}
      tip="Set number of balls to be drawn on the canvas"
    />
  </li>
)

export const GravityControls = props => (
  <React.Fragment>
    <li>
      <CheckBox
        name="move"
        checked={props.move}
        handler={props.handleMove}
        tip="Enable dragging of ball"
      />
    </li>
    <li>
      <Slider
        name="Gravitational constant: "
        min="1"
        max="10"
        value={props.gConstant}
        handler={props.handleGConstant}
        disabled={props.move}
        tip="Set the value for gravitation constant"
      />
    </li>
    <ReactTooltip place="right" effect="float" />
  </React.Fragment>
)
