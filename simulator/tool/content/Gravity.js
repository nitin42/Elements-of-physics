import React from 'react'

export const GravityContent = props => (
  <React.Fragment>
    <h1>Gravity</h1>
    <p>
      Gravity is described as the force that pulls down all the matter. Select
      the element Gravity from the list of options. You will notice a small ball
      revolving around the bigger one.
    </p>
    <p>
      Enable the drag option in control section and then drag the bigger ball
      anywhere on the canvas. You will observe that the smaller ball is
      attracted towards the bigger one. This behaviour is quite similar to what
      we had in the element Acceleration, where all the balls were attracted
      towards the current position of the mouse. But there is a subtle
      difference here. Smaller ball is attracted towards the bigger one due to
      gravitational force, and instead of mouse location we use the current
      location of bigger ball on the canvas whenever it is dragged.
    </p>
    <h2>Gravitational force</h2>
    <p>
      So now that we know the attraction is induced due to gravitational force,
      let's see how it is actually calculated and used in creating animations on
      the canvas.
    </p>
    <p>
      Gravitational force is calculated using the expression{' '}
      <span>
        F = G x m1 x m2 / r<sup>2</sup>
      </span>. Let's breakdown this expression by comparing each symbol with our
      example.
    </p>
    <p>
      <span>F</span> stands for gravitational force that we need to calculate.{' '}
      <span>G</span> stands for <span>Gravitational constant</span>,{' '}
      <span>m1, m2</span> are the masses of both the balls and <span>r</span> is
      the distance between both the balls. You can adjust the gravitational
      constant (<span role="img" aria-label="shocking">
        😱
      </span>) and see how it affects the gravitational force in the control
      section. You can also adjust the ball size using size slider.
    </p>
    <p />
    <div style={{ marginTop: '40px' }}>
      <p>That's it! I hope you enjoyed reading this small series 😄</p>
    </div>
  </React.Fragment>
)
