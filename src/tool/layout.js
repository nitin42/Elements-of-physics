import React from 'react'
import hexToRgba from 'hex-rgba'

import { Provider } from './context'

import { Delay } from './Delay'
import { Loading } from './Loading'
import { Canvas } from './canvas'
import { Controls } from './controls'
import { Content } from './Content'

import './styles.css'

export class Layout extends React.Component {
  ref = React.createRef()

  state = {
    // Canvas width
    width: null,
    // Canvas height
    height: null,
    // Elements of physics
    elements: ['Acceleration', 'Force', 'Gravity'],
    // Current selected element
    currentElement: 'Acceleration',
    // Balls drawn on canvas
    balls: 100,
    // Size of ball (width and height)
    ballSize: 20,
    // Maximum velocity
    maxVelocity: 10,
    showColorPicker: false,
    // Ball color
    color: '#ff69b4',
    showBackgroundPicker: false,
    // Canvas color
    background: '#5d5d5d',
    // Enable frictional force
    friction: false,
    // Friction coefficient value
    frictionCoefficient: 0.1,
    // Enable gravitational force
    gravity: false,
    // Gravitational constant
    gConstant: 10,
    // Enable dragging of ball when <Gravity /> compnonent is mounted
    move: false
  }

  componentDidMount() {
    if (window.innerWidth > 450) {
      const { width, height } = this.ref.current.getBoundingClientRect()

      // Send this measures down to canvas to size accordingly
      this.setState({
        width,
        height
      })

      window.addEventListener('resize', this.handleCanvasResize, false)
    }
  }

  componentDidUpdate() {
    if (window.innerWidth > 450) {
      const { height } = this.ref.current.getBoundingClientRect()

      // Update the canvas height when controls are updated.
      if (height !== this.state.height) {
        const canvas = document.getElementById('defaultCanvas0')

        if (canvas !== null) {
          canvas.style.height = height
        }
      }
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleCanvasResize, false)
  }

  handleCanvasResize = e => {
    if (window.innerWidth > 450) {
      const { width, height } = this.ref.current.getBoundingClientRect()

      const canvas = document.getElementById('defaultCanvas0')

      if (canvas !== null) {
        canvas.style.height = height
        canvas.style.width = width
      }
    }
  }

  // render the list of elements option
  renderOptions = () => {
    return this.state.elements.map((element, i) => {
      return (
        <option value={element} key={i}>
          {element}
        </option>
      )
    })
  }

  // Handler for updating currently selected element
  // Also update the state for drag because when it is enabled, sliders are disabled. So for every new element, reset that state
  handleElementSelect = e =>
    this.setState({ currentElement: e.target.value, move: false })

  // Handler for updating number of balls being drawn on the canvas
  handleBallChange = e => {
    this.setState({ balls: Number(e.target.value) })
  }

  // Handler for updating the size of each ball
  handleBallSize = e => {
    this.setState({ ballSize: Number(e.target.value) })
  }

  // Handler for limit the velocity of each moving ball
  handleVelocity = e => this.setState({ maxVelocity: Number(e.target.value) })

  showColorPicker = e =>
    this.setState(state => ({ showColorPicker: !state.showColorPicker }))

  // Handler for updating the ball color
  handleColorChange = color => this.setState({ color: color.hex })

  showBackgroundColorPicker = e =>
    this.setState(state => ({
      showBackgroundPicker: !state.showBackgroundPicker
    }))

  // Handler for updating the background of canvas
  handleBackgroundChange = color => this.setState({ background: color.hex })

  // Handler for enabling frictional force
  handleFriction = e => this.setState({ [e.target.name]: e.target.checked })

  // Handler for enabling gravitational force
  handleGravity = e => this.setState({ [e.target.name]: e.target.checked })

  // Handler for updating friction coefficient value
  handleFrictionCoefficient = e =>
    this.setState({ frictionCoefficient: Number(e.target.value) })

  // Handler for updating gravitational constant value
  handleGConstant = e => this.setState({ gConstant: Number(e.target.value) })

  // Handler for enabling dragging of ball
  handleMove = e => this.setState({ [e.target.name]: e.target.checked })

  render() {
    if (window.innerWidth > 450) {
      return (
        <div>
          <div className="container">
            <div className="canvas-container" ref={this.ref}>
              <Delay
                wait={800}
                render={waiting => {
                  return waiting ? (
                    <Loading />
                  ) : (
                    <Provider value={this.state}>
                      <Canvas />
                    </Provider>
                  )
                }}
              />
            </div>
            <div
              className="controls"
              style={{ backgroundColor: hexToRgba(this.state.color, '10') }}
            >
              <Provider value={this.state}>
                <Controls
                  handleVelocity={this.handleVelocity}
                  handleElementSelect={this.handleElementSelect}
                  handleBallChange={this.handleBallChange}
                  handleBallSize={this.handleBallSize}
                  handleColorPicker={this.showColorPicker}
                  handleColorChange={this.handleColorChange}
                  handleBackgroundChange={this.handleBackgroundChange}
                  handleBackground={this.showBackgroundColorPicker}
                  handleFriction={this.handleFriction}
                  handleGravity={this.handleGravity}
                  handleFrictionCoefficient={this.handleFrictionCoefficient}
                  handleGConstant={this.handleGConstant}
                  handleMove={this.handleMove}
                  renderOptions={this.renderOptions}
                />
              </Provider>
            </div>
          </div>
          <Content />
        </div>
      )
    } else {
      return (
        <div
          style={{
            backgroundColor: 'mistyrose',
            display: 'flex',
            justifyContent: 'center',
            marginTop: '50px'
          }}
        >
          <p>Oops! Simulator can be accessed only on bigger screens 😅</p>
        </div>
      )
    }
  }
}
