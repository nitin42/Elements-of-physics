import React from 'react'

import { Consumer } from './context'

import { ForceCanvas, AccelerationCanvas, GravityCanvas } from './elements'

// Draw canvas based on currently selected element (state.currentElement)
const pickCanvas = props => {
  if (props.currentElement === 'Force') {
    return <ForceCanvas {...props} />
  } else if (props.currentElement === 'Acceleration') {
    return <AccelerationCanvas {...props} />
  } else if (props.currentElement === 'Gravity') {
    return <GravityCanvas {...props} />
  }
}

export const Canvas = props => (
  <Consumer>{state => pickCanvas({ ...state, ...props })}</Consumer>
)
