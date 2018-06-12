import React from 'react'
import ReactDOM from 'react-dom'

import Delay from './Delay'

import Canvas from './canvas'
import Controls from './controls'

import './styles.css'

const mainStyles = {
  display: 'grid',
  gridGap: 0,
  gridTemplateColumns: '65% 35%',
  gridTemplateRows: '20% 20%',
  border: '2px solid #4c4c4c'
}

const loaderStyles = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '100px'
}

const Loading = () => (
  <div style={loaderStyles}>
    <div className="loading">🌀</div>
  </div>
)

export default class Layout extends React.Component {
  state = {
    width: null,
    height: null,
    currentElement: 'Acceleration',
    balls: 100,
    ballSize: 30,
    maxVelocity: 10,
    showColorPicker: false,
    color: 'hotpink',
    showBackgroundPicker: false,
    background: 'mistyrose',
    friction: false,
    frictionCoefficient: 0.1,
    gravity: false,
    gConstant: 10,
    move: false
  }

  componentDidMount() {
    const { width, height } = this.node.getBoundingClientRect()

    this.setState({
      width,
      height
    })

    window.addEventListener('resize', this.handleCanvasResize, false)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleCanvasResize, false)
  }

  handleCanvasResize = e => {
    const { width, height } = this.node.getBoundingClientRect()

    const canvas = document.getElementById('defaultCanvas0')

    canvas.style.height = height
    canvas.style.width = width
  }

  handleElementSelect = e => this.setState({ currentElement: e.target.value })

  handleBallChange = e => {
    this.setState({ balls: Number(e.target.value) })
  }

  handleBallSize = e => {
    this.setState({ ballSize: Number(e.target.value) })
  }

  handleVelocity = e => this.setState({ maxVelocity: Number(e.target.value) })

  showColorPicker = e =>
    this.setState(state => ({ showColorPicker: !state.showColorPicker }))

  handleColorChange = color => this.setState({ color: color.hex })

  handleBackground = e =>
    this.setState(state => ({
      showBackgroundPicker: !state.showBackgroundPicker
    }))

  handleBackgroundChange = color => this.setState({ background: color.hex })

  handleFriction = e => this.setState({ [e.target.name]: e.target.checked })

  handleGravity = e => this.setState({ [e.target.name]: e.target.checked })

  handleFrictionCoefficient = e =>
    this.setState({ frictionCoefficient: Number(e.target.value) })

  handleGConstant = e => this.setState({ gConstant: Number(e.target.value) })

  handleMove = e => this.setState({ [e.target.name]: e.target.checked })

  render() {
    return (
      <div style={mainStyles}>
        <div ref={node => (this.node = node)}>
          <Delay
            wait={1500}
            render={waiting => {
              return waiting ? (
                <Loading />
              ) : (
                <Canvas
                  currentElement={this.state.currentElement}
                  balls={this.state.balls}
                  width={this.state.width}
                  ballSize={this.state.ballSize}
                  height={this.state.height}
                  maxVelocity={this.state.maxVelocity}
                  color={this.state.color}
                  background={this.state.background}
                  friction={this.state.friction}
                  frictionCoefficient={this.state.frictionCoefficient}
                  gravity={this.state.gravity}
                  gConstant={this.state.gConstant}
                  move={this.state.move}
                />
              )
            }}
          />
        </div>
        <div className="controls">
          <Controls
            balls={this.state.balls}
            ballSize={this.state.ballSize}
            maxVelocity={this.state.maxVelocity}
            handleVelocity={this.handleVelocity}
            handleElementSelect={this.handleElementSelect}
            handleBallChange={this.handleBallChange}
            handleBallSize={this.handleBallSize}
            handleColorPicker={this.showColorPicker}
            showColorPicker={this.state.showColorPicker}
            showBackgroundPicker={this.state.showBackgroundPicker}
            handleColorChange={this.handleColorChange}
            handleBackgroundChange={this.handleBackgroundChange}
            handleBackground={this.handleBackground}
            handleFriction={this.handleFriction}
            handleGravity={this.handleGravity}
            handleFrictionCoefficient={this.handleFrictionCoefficient}
            handleGConstant={this.handleGConstant}
            handleMove={this.handleMove}
            color={this.state.color}
            background={this.state.background}
            friction={this.state.friction}
            frictionCoefficient={this.state.frictionCoefficient}
            gravity={this.state.gravity}
            gConstant={this.state.gConstant}
          />
        </div>
      </div>
    )
  }
}
