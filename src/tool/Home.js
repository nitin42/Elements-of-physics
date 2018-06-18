import React from 'react'
import { css } from 'emotion'
import { Link } from '@reach/router'
import { StyledLink } from './StyledLink'

const styles = {
  display: 'flex',
  justifyContent: 'center'
}

export const Home = () => (
  <div className="home-content">
    <div style={styles}>
      <h1>Elements of Physics</h1>
    </div>
    <div style={styles}>
      <p>
        by{' '}
        <a href="https://twitter.com/NTulswani" target="_blank">
          <i>Nitin Tulswani&nbsp;</i>
        </a>
      </p>
    </div>
    <p>
      Elements of Physics is an interactive simulation which describes different
      elements of physics like <span>Gravity</span>, <span>Acceleration</span>,{' '}
      <span>Force</span> and <span>Particle generation</span>. Each element is
      described with different simulation controls.
    </p>
    <p>
      The simulator consists of two parts - <span>canvas</span> and{' '}
      <span>control section</span>. Control section consists of different
      controls for manipulating each element, and everything is then rendered on
      the canvas.
    </p>
    <p>
      Each element is interactive and fun to play with so you probably won't get
      bore. Although there is some theory behind each element, but it's written
      in a very concise and compressed way.
    </p>
    <p>
      Source code for the tools and animations used in the simulator can be
      found{' '}
      <a
        className="github-link"
        href="https://github.com/nitin42/Elements-of-physics"
        target="_blank"
      >
        here
      </a>. I hope you enjoy!
    </p>
    <div style={{ ...styles, marginTop: '60px' }}>
      <StyledLink to="layout" width="8%">
        Start
      </StyledLink>
    </div>
  </div>
)
