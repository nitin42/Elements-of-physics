import React from 'react'
import { BlockPicker } from 'react-color'
import ReactTooltip from 'react-tooltip'

import { capitalize } from './utils'

export const ColorPicker = props => {
  const pickerOffset = props.name === 'Color: ' ? '22px' : '-35px'
  const tooltip = `Pick a ${
    props.name === 'Color: ' ? 'color for ball.' : 'background color for canvas'
  }`

  return (
    <React.Fragment>
      <span>{capitalize(props.name)}</span>
      <div
        style={{
          width: 20,
          height: 20,
          borderRadius: '5px',
          backgroundColor: props.color,
          display: 'inline-block',
          marginBottom: -4
        }}
        onClick={props.clickHandler}
        data-tip={tooltip}
      />
      <ReactTooltip place="right" effect="float" />

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
