import React from 'react'

export const GravityContent = props => (
  <React.Fragment>
    <h1>Gravity</h1>
    <p>
      Gravity can be described as the force that pulls down all the matter.
      Select the element <span>Gravity</span> from the list of options. You will
      notice a small ball revolving around the bigger one.
    </p>
    <p>
      Enable the drag option in control section and then drag the bigger ball
      anywhere on the canvas. You will observe that the smaller ball is
      attracted towards the bigger one. This behaviour is quite similar to what
      we had in the element <span>Acceleration</span> where all the balls were
      attracted towards the current position of the mouse. But there is a subtle
      difference here. Smaller ball is attracted towards the bigger one due to
      gravitational force, and instead of mouse location we use the location of
      bigger ball on the canvas whenever it is dragged.
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
      the distance between both the balls.
    </p>
    <p>
      You can adjust the gravitational constant (<span
        role="img"
        aria-label="shocking"
      >
        😱
      </span>) and see how it affects the gravitational force in the control
      section. You can also adjust the ball size using <span>size</span> slider.
    </p>
    <div style={{ marginTop: '40px' }}>
      <p id="celebration">
        Hooray! Now you know all the three elements of physics. Next series will
        be updated with more elements like oscillations, particle generation and
        angular motion.
      </p>
      <p id="celebration">
        You can{' '}
        <a
          id="article"
          href="https://twitter.com/NTulswani"
          target="_blank"
          rel="noopener noreferrer"
        >
          follow me on Twitter
        </a>{' '}
        for more updates!
      </p>
    </div>
  </React.Fragment>
)
