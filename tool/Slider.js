import React from 'react'

export const Slider = props => (
  <React.Fragment>
    <strong>{props.name}</strong>
    <input
      className="slider"
      type="range"
      min={props.min}
      max={props.max}
      step={props.step || 1}
      value={props.value}
      onChange={props.handler}
    />
    {props.value}
  </React.Fragment>
)
