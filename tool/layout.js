import React from 'react'

import { Provider } from './context'

import { Delay } from './Delay'
import { Loading } from './Loading'
import { Canvas } from './canvas'
import { Controls } from './controls'

import './styles.css'

const mainStyles = {
  display: 'grid',
  gridGap: 0,
  gridTemplateColumns: '65% 35%',
  gridTemplateRows: '20% 20%',
  border: '2px solid #4c4c4c'
}

export default class Layout extends React.Component {
  state = {
    width: null,
    height: null,
    elements: ['Acceleration', 'Force', 'Gravity'],
    currentElement: 'Acceleration',
    balls: 100,
    ballSize: 20,
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

  componentDidUpdate() {
    const { height } = this.node.getBoundingClientRect()

    if (height !== this.state.height) {
      const canvas = document.getElementById('defaultCanvas0')

      canvas.style.height = height
    }
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

  renderOptions = () => {
    return this.state.elements.map((element, i) => {
      return (
        <option value={element} key={i}>
          {element}
        </option>
      )
    })
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
                <Provider value={this.state}>
                  <Canvas node={this.node} />
                </Provider>
              )
            }}
          />
        </div>
        <div className="controls">
          <Provider value={this.state}>
            <Controls
              handleVelocity={this.handleVelocity}
              handleElementSelect={this.handleElementSelect}
              handleBallChange={this.handleBallChange}
              handleBallSize={this.handleBallSize}
              handleColorPicker={this.showColorPicker}
              handleColorChange={this.handleColorChange}
              handleBackgroundChange={this.handleBackgroundChange}
              handleBackground={this.handleBackground}
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
    )
  }
}
