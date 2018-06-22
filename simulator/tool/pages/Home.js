import React from 'react'

import { StyledLink } from '../styles/StyledLink'

const styles = {
  display: 'flex',
  justifyContent: 'center'
}

export const Home = () => (
  <div className="home-content">
    <div style={styles}>
      <h1>Elements of Physics</h1>
    </div>
    <div style={styles} className="nitin-tulswani">
      <p>
        by{' '}
        <a
          id="profile"
          href="https://twitter.com/NTulswani"
          target="_blank"
          rel="noopener noreferrer"
        >
          Nitin Tulswani
        </a>
      </p>
    </div>
    <p>
      Elements of Physics is an interactive simulation which describes different
      elements of physics like <span>Gravity</span>, <span>Acceleration</span>{' '}
      and <span>Force</span>. Each element is described with different
      simulation controls.
    </p>
    <p>
      The simulator consists of two parts - <span>canvas</span> and{' '}
      <span>control section</span>. Control section consists of different
      controls for manipulating each element, and everything is then rendered on
      the canvas. You can hover over an option in the control section to
      understand the functionality of that control.
    </p>
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '30px',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '5px'
      }}
    >
      <img
        src={require('./images/simulator.png')}
        alt="simulator"
        height={500}
        width={800}
        style={{ boxShadow: '4px 4px 4px' }}
      />
      <p style={{ color: 'grey', fontSize: '15px' }}>Simulator</p>
    </div>
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '40px',
        padding: '5px'
      }}
    >
      <div>
        <img
          src={require('./images/canvas.png')}
          alt="canvas"
          style={{ boxShadow: '4px 4px 4px' }}
          height={600}
          width={600}
        />
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '10px',
            color: 'grey',
            fontSize: '15px'
          }}
        >
          Canvas
        </div>
      </div>
      <div style={{ marginLeft: 'auto' }}>
        <img
          src={require('./images/control-section.png')}
          alt="control-section"
          style={{ boxShadow: '4px 4px 4px' }}
          height={600}
          width={400}
        />
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '10px',
            color: 'grey',
            fontSize: '15px'
          }}
        >
          Control section
        </div>
      </div>
    </div>
    <p>
      Each element is interactive and fun to play with. Though there is some
      theory behind each element, but it's written in a very concise and
      compressed way. The scope for the mathematics used behind the animations
      is also kept minimal so as to make it easier to grasp the core concepts
      without much cognitive load, which means less symbolic expressions
      (hooray!)
    </p>
    <p>
      Source code for the tools and animations used in the simulator can be
      found{' '}
      <a
        className="github-link"
        href="https://github.com/nitin42/Elements-of-physics"
        target="_blank"
        rel="noopener noreferrer"
      >
        here
      </a>.
    </p>
    <p>I hope you enjoy!</p>
    <div style={{ ...styles, marginTop: '60px' }}>
      <StyledLink to="layout" width="8%">
        Start
      </StyledLink>
    </div>
  </div>
)
