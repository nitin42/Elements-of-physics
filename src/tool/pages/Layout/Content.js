import React from 'react'

import { Consumer } from './context'

import { AccelerationContent } from '../../content/Acceleration'
import { ForceContent } from '../../content/Force'
import { GravityContent } from '../../content/Gravity'

const pickContent = currentElement => {
  if (currentElement === 'Acceleration') {
    return <AccelerationContent />
  } else if (currentElement === 'Force') {
    return <ForceContent />
  } else if (currentElement === 'Gravity') {
    return <GravityContent />
  }
}

export const Content = props => (
  <Consumer>
    {state => (
      <div className="content">{pickContent(state.currentElement)}</div>
    )}
  </Consumer>
)
