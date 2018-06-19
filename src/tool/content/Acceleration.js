import React from 'react'

export const AccelerationContent = props => (
  <React.Fragment>
    <h1>Acceleration</h1>
    <p>
      Acceleration is defined as change in velocity over a period of time. In
      the above simulator, if you choose the element <span>Acceleration</span>{' '}
      from the options, then you will notice a number of balls being attracted
      towards the current position of mouse on the canvas. This behavior is due
      to the force created when a ball moves from its actual position to the
      mouse position. Let's examine how force actually works in pixel world.
    </p>
    <p>
      According to the{' '}
      <a
        id="article"
        href="https://www.khanacademy.org/science/physics/forces-newtons-laws/newtons-laws-of-motion/a/what-is-newtons-second-law"
        target="_blank"
        style={{ borderBottom: '2px dotted #eeaeca' }}
      >
        Newton's Second Law of Motion
      </a>, Force equals mass times acceleration. Since we are in pixel world,{' '}
      <span>we assume the mass of a ball to be one</span>. Now to determine the
      force, we use the Newton's Second Law equation -
    </p>
    <blockquote>Force = Mass x Acceleration</blockquote>
    <p>
      After substituting the values in the above equation, we end up with{' '}
      <span>F = A</span>. This means, a constant force is being applied to each
      ball which causes it to accelerate.
    </p>
    <p>
      This force can also be described as a vector that causes the ball with
      mass to accelerate.
    </p>
    <blockquote>
      Move the mouse over or touch the canvas. You will notice that each ball
      will be attracted towards the current mouse position with a constant
      force. Try adjusting the maximum velocity of each ball and see what
      happens.
    </blockquote>
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
          <img src={require('../../images/4.jpg')} height={360} width={400} />
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
          <img src={require('../../images/6.jpg')} height={360} width={700} />
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
          In the above step, we calculated the acceleration vector. With this
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
            id="article"
            target="_blank"
            href="https://www.khanacademy.org/computing/computer-programming/programming-natural-simulations/programming-vectors/a/vector-magnitude-normalization"
          >
            vector normalization
          </a>{' '}
          and <span>scale</span> means multiplying a vector with a constant
          value.
        </blockquote>
        <p>
          Go to the control section and adjust the magnitude of the accleration
          vector. You'll notice that ball either accelerates fast or slowly
          towards the mouse location.
        </p>
      </li>
    </ul>
  </React.Fragment>
)
