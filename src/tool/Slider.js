import React from 'react'

export const Slider = props => (
  <React.Fragment>
    <span>
      {props.name}
      {props.value}
    </span>
    <input
      className="slider"
      type="range"
      min={props.min}
      max={props.max}
      step={props.step || 1}
      value={props.value}
      onChange={props.handler}
      disabled={props.disabled}
    />
  </React.Fragment>
)

Slider.defaultProps = {
  disabled: false
}
