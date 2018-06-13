import React from 'react'

import { capitalize } from './utils'

export const CheckBox = props => (
  <React.Fragment>
    <span>
      {props.name === 'move' ? 'Drag: ' : `${capitalize(props.name)}: `}
    </span>
    <label className="switch">
      <input
        type="checkbox"
        name={props.name}
        checked={props.checked}
        onChange={props.handler}
      />
      <span className="toggle round" />
    </label>
  </React.Fragment>
)
