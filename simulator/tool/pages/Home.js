import React from 'react'

import { StyledLink } from '../styles/StyledLink'

const styles = {
  display: 'flex',
  justifyContent: 'center'
}

const Center = props => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: props.direction,
      ...props.style
    }}
  >
    {props.children}
  </div>
)

export const Home = () => (
  <div className="home-content">
    <div style={styles}>
      <h1 style={{ display: 'inline', borderBottom: '5px solid #4f4f4f' }}>
        Elements of Physics
      </h1>
    </div>
    <div style={styles} className="nitin-tulswani">
      <p>
        by{' '}
        <a
          className="cool-link"
          id="profile"
          href="https://twitter.com/NTulswani"
          target="_blank"
          rel="noopener noreferrer"
        >
          Nitin Tulswani
        </a>
      </p>
    </div>
    <h2>Introduction</h2>
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
      the canvas. You can hover over an option in the control section to learn
      how it works.
    </p>
    <Center
      style={{
        marginTop: '30px',
        padding: '5px'
      }}
      direction="column"
    >
      <img
        src={require('./images/Simulator.png')}
        alt="simulator"
        height={600}
        width={890}
        style={{ boxShadow: '4px 4px 4px #f9f9f9' }}
      />
      <p style={{ color: 'grey', fontSize: '15px' }}>Simulator</p>
    </Center>
    <p>
      Each element is interactive and fun to play with. Though there is some
      theory behind each element, but it's written in a very concise and
      compressed way. The scope for the mathematics used behind the animations
      is also kept minimal so as to make it easier to grasp the core concepts
      without much cognitive load, which means less symbolic expressions
      (hooray!)
    </p>
    <h2>Interactions</h2>
    <p>
      For some elements (Force and Gravity), you can interact with the canvas to
      alter their behaviour such as attracting a number of balls towards the
      current location of the mouse on canvas, or dragging a ball on canvas to
      induce gravitational force.
    </p>
    <h2>Source</h2>
    <p>
      Source code for the tools and animations used in the simulator can be
      found{' '}
      <a
        className="cool-link"
        id="profile"
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
