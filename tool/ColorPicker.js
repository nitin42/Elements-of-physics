import React from 'react'
import { SketchPicker } from 'react-color'

import { capitalize } from './utils'

export const ColorPicker = props => (
  <React.Fragment>
    <strong>{capitalize(props.name)}</strong>
    <div
      style={{
        width: 20,
        height: 20,
        borderRadius: '4px',
        backgroundColor: props.color,
        display: 'inline-block',
        marginBottom: -4
      }}
      onClick={props.clickHandler}
    />
    {props.show ? (
      <div style={{ marginTop: '10px' }}>
        <SketchPicker
          color={props.color}
          onChangeComplete={props.handleColorChange}
        />
      </div>
    ) : null}
  </React.Fragment>
)
