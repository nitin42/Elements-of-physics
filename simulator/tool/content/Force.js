import React from 'react'

export const ForceContent = props => (
  <React.Fragment>
    <h1>Force</h1>
    <p>
      A force is a vector that causes an object with mass to accelerate. When
      you select the element <span>Force</span> from the list of element
      options, then you will notice a number of balls moving with a{' '}
      <span>constant</span> velocity on the canvas. Rendering balls on canvas
      using <span>Force</span> shares a similar mechanism when compared to{' '}
      <span>Acceleration</span>. The only difference here is that each ball is
      moving with a constant velocity and has different mass.
    </p>
    <p>
      The value of mass here is a pseudo-random number between the inclusive
      range 0 - 1. So each ball is of different size and gets a acceleration
      force of <span>Force / mass</span>.
    </p>
    <blockquote>
      Newton's Second Law equation : Force / Mass = Acceleration
    </blockquote>
    <h2>Applying force on a ball</h2>
    <div style={{ marginTop: '20px' }}>
      <h3>Frictional force</h3>
    </div>
    <p>
      Along with the acceleration force, we can also apply an additional force
      to the ball like{' '}
      <a
        id="article"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.khanacademy.org/science/physics/forces-newtons-laws/inclined-planes-friction/a/what-is-friction"
      >
        Frictional force
      </a>. Enable the friction and adjust the friction coefficient in the
      control section. Friction coefficient determines the strength of friction.
      The more is the value of friction coefficient, more is the friction.
    </p>
    <p>
      After you've enabled the friction, you will notice that the ball moves
      slowly and then reaches the edge. It stops accelerating further after it
      has reached the edge because frictional force reduces the energy of a
      system while the ball is in motion.
    </p>
    <blockquote>
      Symbolic expression for friction force is{' '}
      <span style={{ color: 'inherit' }}>-uNV</span>. The negative sign
      indicates that the friction force always acts in the opposite direction. u
      is the coefficient of friction, N is the normal force which is
      perpendicular to the ball's motion along the canvas. We are assuming the
      value of normal force to be 1 in our case, and V is the velocity unit
      vector. Check out{' '}
      <a
        style={{ color: 'inherit' }}
        id="article"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.khanacademy.org/science/physics/forces-newtons-laws/inclined-planes-friction/a/what-is-friction"
      >
        this
      </a>{' '}
      article for a deeper analysis on frictional force.
    </blockquote>
    <div style={{ marginTop: '20px' }}>
      <h3>Gravitational force</h3>
    </div>
    <p>
      We can also apply <span>gravitational force</span> to a ball. Enable
      gravity in the control section. You will notice that each ball hits the
      ground with same acceleration as gravitational force is scaled according
      to the mass of a ball.
    </p>
    <div style={{ marginTop: '20px' }}>
      <h3>External force</h3>
    </div>
    <p>
      Interestingly, you can also apply an external force using a vector. Click
      the <i style={{ color: '#4c4c4c' }} className="fas fa-plus-circle" /> icon
      near apply force in the control section and you will be prompted with a
      modal to create your own vector. Try it and see how this force affects the
      ball. You can also remove this vector using{' '}
      <i style={{ color: '#4c4c4c' }} className="fas fa-minus-circle" /> by
      hovering over it in the control section.
    </p>
    <blockquote>
      You can add multiple force vectors for a ball using apply force option in
      control section.
    </blockquote>
  </React.Fragment>
)
