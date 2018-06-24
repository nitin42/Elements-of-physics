import React from 'react'

export const AccelerationContent = props => (
  <React.Fragment>
    <h1>Vector</h1>
    <p>
      Before we start learning about different elements of physics, we need to
      know something about vectors. A vector is a quantity that has a direction
      and magnitude. Consider two points A and B, then the vector will be
      difference between point A and point B.
    </p>
    <div
      style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}
    >
      <img src={require('./images/Fig-1.png')} />
    </div>
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '10px',
        color: 'grey',
        fontSize: '15px'
      }}
    >
      Vector between point A and B
    </div>
    <h1>Acceleration</h1>
    <p>
      Acceleration is defined as change in velocity over a period of time. In
      the above simulator, if you choose the element <span>Acceleration</span>{' '}
      from the options, then you will notice a number of balls being attracted
      towards the current position of mouse on the canvas. This behavior is due
      to the acceleration force created when a ball moves from its actual
      position to the mouse position. Let's examine how force actually works in
      pixel world.
    </p>
    <p>
      According to the{' '}
      <a
        className="cool-link"
        id="article"
        href="https://www.khanacademy.org/science/physics/forces-newtons-laws/newtons-laws-of-motion/a/what-is-newtons-second-law"
        target="_blank"
        rel="noopener noreferrer"
      >
        Newton's Second Law of Motion
      </a>, Force equals mass times acceleration. Since we are in pixel world,{' '}
      <span>we assume the amount of matter in an object to be 1.</span> Hence,
      the mass of a ball here is 1. Now to determine the acceleration force, we
      use the Newton's Second Law equation.
    </p>
    <blockquote>
      Newton's Second Law equation is written as, Force = Mass x Acceleration
    </blockquote>
    <p>
      After substituting the values in the equation, we end up with{' '}
      <span>F = A</span> (value of Mass is 1). This means, a constant force is
      being applied to each ball which causes it to accelerate.
    </p>
    <p>
      This force can also be described as a vector that causes the ball with
      mass to accelerate. Move the mouse over or touch the canvas. You will
      notice that each ball will be attracted towards the current mouse position
      with a constant force. Try adjusting the maximum velocity of each ball and
      observe the balls.
    </p>
    <h2>Fragmentation</h2>
    <ul className="content-acceleration">
      <li>
        <h3>Representing the ball position and mouse location</h3>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '20px'
          }}
        >
          <img src={require('./images/Fig-2.png')} alt="Figure-1" />
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '10px'
          }}
        >
          <p
            style={{
              color: 'grey',
              fontSize: '15px'
            }}
          >
            Ball with location (X<sub>a</sub>, Y<sub>a</sub>) and mouse with
            location (X<sub>b</sub>, Y<sub>b</sub>) on canvas
          </p>
        </div>
        <p>
          In the above figure, we represent the ball with position (x<sub>
            A
          </sub>, y<sub>A</sub>) and the mouse location (x<sub>B</sub>, y<sub>
            B
          </sub>) on the canvas.
        </p>
      </li>
      <li>
        <h3>Calculating the vector between ball and mouse location</h3>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '20px'
          }}
        >
          <img src={require('./images/Fig-3.png')} alt="Figure-2" />
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '10px',
            color: 'grey',
            fontSize: '15px'
          }}
        >
          Determining acceleration vector between the ball and mouse location on
          the canvas.
        </div>
      </li>
      <p>
        Now we determine the vector between the ball and mouse location. Simple,
        we take the difference between both the points, mouse and ball location
        on the canvas. This vector is the constant force that causes the ball to
        accelerate towards the mouse.{' '}
        <span>
          The direction of this vector is from the ball location to mouse
          position on the canvas.
        </span>
      </p>
      <li>
        <h3>Better animations with vector math</h3>
        <p>
          In the above step, we determined acceleration vector. With this
          vector, ball will move directly to the mouse location and it would
          appear like it happened instantaneously. Imagine when you have
          multiple balls !? It would then create a janky experience and hence
          animation will suffer on the canvas. So we need to decide how quickly
          a ball should accelerate towards the mouse.
        </p>
        <p>
          We'll need to shrink this vector and then scale it back with a value
          to accelerate a ball.
        </p>
        <blockquote>
          In mathematical terms, shrink refers to{' '}
          <a
            style={{ color: 'inherit' }}
            id="article"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.khanacademy.org/computing/computer-programming/programming-natural-simulations/programming-vectors/a/vector-magnitude-normalization"
          >
            vector normalization
          </a>{' '}
          and scale means multiplying a vector with a constant value.
        </blockquote>
        <p>
          Go to the control section and adjust the magnitude of the accleration
          vector. You'll notice that ball either accelerates fastly or slowly
          towards the mouse location.
        </p>
      </li>
    </ul>
  </React.Fragment>
)
