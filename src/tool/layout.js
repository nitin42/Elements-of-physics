import React from 'react'
import hexToRgba from 'hex-rgba'

import { Provider } from './context'

import { Delay } from './Delay'
import { Loading } from './Loading'
import { Canvas } from './canvas'
import { Controls } from './controls'
import { Content } from './Content'
import { Info } from './Info'

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
    currentElement: 'Force',
    // Balls drawn on canvas
    balls: 100,
    // Size of ball (width and height)
    ballSize: 20,
    // Maximum velocity
    maxVelocity: 10,
    // Ball color picker
    showColorPicker: false,
    // Ball color
    color: '#ff69b4',
    // Canvas color picker
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
    move: false,
    // Screen width
    innerWidth: window.innerWidth,
    // Modal for creating a vector for applying force on a ball
    isModalOpen: false,
    // Store the function for applying force on each ball
    fnArr: [],
    // Store the values x and y position for each ball
    valArr: [],
    //
    forces: [],
    // X position of the ball
    xVec: 0,
    // Y position of the ball
    yVec: 0
  }

  componentDidMount() {
    if (window.innerWidth > 850) {
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
    if (window.innerWidth > 850) {
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
    this.setState({ innerWidth: window.innerWidth })

    if (window.innerWidth > 850) {
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

  // Open or close the apply force modal
  toggleModal = () =>
    this.setState(state => ({ isModalOpen: !state.isModalOpen }))

  // Fired when the vector inputs (x and y position values) are filled
  updateVector = e => {
    e.preventDefault()

    this.setState(state => ({
      isModalOpen: !state.isModalOpen,
      valArr:
        state.xVec === 0 && state.yVec === 0
          ? state.valArr
          : state.valArr.concat({ x: state.xVec, y: state.yVec }),
      fnArr: state.fnArr.concat(
        new Function(
          'ball',
          'Vector',
          'a',
          'b',
          'ball.applyForce(new Vector(a, b))'
        )
      ),
      // Reset the input field for vectors
      xVec: 0,
      yVec: 0
    }))
  }

  // Delete a force vector
  deleteVectors = key => {
    const fn = [...this.state.fnArr]
    const val = [...this.state.valArr]

    fn.splice(fn.indexOf(key), 1)
    val.splice(val.indexOf(key), 1)

    // Start animation on node removal!
    const animate = document
      .getElementById(`vector-item-${key}`)
      .animate(
        [
          { opacity: 1, transform: 'translateX(0px)' },
          { opacity: 0, transform: 'translateX(400px)' }
        ],
        {
          duration: 600,
          iterations: 1,
          easing: 'ease-in-out'
        }
      )

    // After the animation, update the state arrays for vector functions and values
    animate.onfinish = () =>
      this.setState(state => ({
        fnArr: fn,
        valArr: val
      }))
  }

  // x vector position
  updateXVec = e => this.setState({ xVec: e.target.value })

  // y vector position
  updateYVec = e => this.setState({ yVec: e.target.value })

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
    return (
      <div>
        {this.state.innerWidth > 850 ? (
          <React.Fragment>
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
                    isModalOpen={this.state.isModalOpen}
                    toggleModal={this.toggleModal}
                    updateVector={this.updateVector}
                    deleteVectors={this.deleteVectors}
                    updateXVec={this.updateXVec}
                    updateYVec={this.updateYVec}
                  />
                </Provider>
              </div>
            </div>
            <Content />
          </React.Fragment>
        ) : (
          <div>
            <Info />
            <Content />
          </div>
        )}
      </div>
    )
  }
}
