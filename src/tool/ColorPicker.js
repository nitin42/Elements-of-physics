import React from 'react'
import { BlockPicker } from 'react-color'

import { capitalize } from './utils'

export const ColorPicker = props => {
  const pickerOffset = props.name === 'Color: ' ? '25px' : '-25px'

  return (
    <React.Fragment>
      <span>{capitalize(props.name)}</span>
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
        <div
          style={{
            marginTop: '10px',
            position: 'relative',
            right: pickerOffset
          }}
        >
          <BlockPicker color={props.color} onChange={props.handleColorChange} />
        </div>
      ) : null}
    </React.Fragment>
  )
}
