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
      <div className="content">
        <h1>Introduction</h1>
        <p>
          Welcome to Elements of Physics, an interactive simulation which
          describes different elements of physics like <span>Acceleration</span>,{' '}
          <span>Force</span>, <span>Gravity</span> and{' '}
          <span>Particle generation.</span> Before we start learning about these
          elements, we need to know something about vectors.
        </p>
        <h1>Vector</h1>
        <p>
          A vector is a quantity that has a direction and magnitude. Consider
          two points A and B, then the vector will be difference between point A
          and point B.
        </p>
        {pickContent(state.currentElement)}
      </div>
    )}
  </Consumer>
)
