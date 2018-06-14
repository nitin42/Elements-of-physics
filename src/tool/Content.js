import React from 'react'

export const Content = props => (
  <React.Fragment>
    <div className="content">
      <h1 className="heading" style={{ fontSize: '50px' }}>
        Elements of physics
      </h1>
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
      <h1 className="heading" style={{ fontSize: '40px' }}>
        Acceleration
      </h1>
      <p>
        Acceleration is defined as change in velocity over a period of time. In
        the above simulator, if you choose the element Acceleration from option,
        then you will notice a number of balls attracted towards the position of
        mouse on the canvas. According to the Newton's Laws of Motion, Force
        equa
      </p>
      <h1 className="heading" style={{ fontSize: '40px' }}>
        Force
      </h1>
      <p>A force is a vector causes an object with mass to accelerate.</p>
      <h1 className="heading" style={{ fontSize: '40px' }}>
        Gravity
      </h1>
      <p>The force that pulls down all the matter.</p>
    </div>
  </React.Fragment>
)
