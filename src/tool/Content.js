import React from 'react'

export const Content = props => (
  <React.Fragment>
    <div className="content">
      <h1>Elements of physics</h1>
      <p>
        Welcome to an interactive simulation describing different elements of
        physics like <span>Acceleration</span>, <span>Force</span>,{' '}
        <span>Gravity</span> and <span>Particle generation.</span> Before we
        start with describing what these elements are, we need to know something
        about vectors. So what is a vector ?
      </p>
      <p>
        A vector is a quantity that has a direction and a magnitude. Consider
        two points A and B, then the vector will be difference between point A
        and point B.
      </p>
      <h1>Acceleration</h1>
      <p>
        Acceleration is defined as change in velocity over a period of time. In
        the above simulator, if you choose the element Acceleration from the
        options, then you will notice a number of balls attracted towards the
        current position of mouse on the canvas. This behavior is due to the
        force created when a ball moves from its actual position to the mouse
        position. Let's see how this happen in pixel world.
      </p>
      <p>
        According to the Newton's Second Law of Motion,{' '}
        <span>Force equals mass times acceleration.</span>
        Since we are in pixel world, we assume the mass of a ball to be one. Now
        to determine the force, we use the Newton's Second Law.
      </p>
      <p>
        After placing the values in equation, we end up with <span>F = A</span>.
        So when this constant force acts on the ball, it causes it to
        accelerate.
      </p>
      <h1>Force</h1>
      <p>A force is a vector causes an object with mass to accelerate.</p>
      <h1>Gravity</h1>
      <p>The force that pulls down all the matter.</p>
    </div>
  </React.Fragment>
)
