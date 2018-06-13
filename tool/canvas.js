import React from 'react'

import { Consumer } from './context'

import { ForceCanvas, AccelerationCanvas, GravityCanvas } from './elements'

// Draw canvas based on currently selected element (state.currentElement)
const renderCanvas = state => {
  if (state.currentElement === 'Force') {
    return <ForceCanvas {...state} />
  } else if (state.currentElement === 'Acceleration') {
    return <AccelerationCanvas {...state} />
  } else if (state.currentElement === 'Gravity') {
    return <GravityCanvas {...state} />
  }
}

export const Canvas = props => (
  <Consumer>
    {state => {
      return (
        <div style={{ margin: '0 auto' }}>
          {renderCanvas({ ...state, ...props })}
        </div>
      )
    }}
  </Consumer>
)
