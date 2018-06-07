import React from 'react'
import ReactDOM from 'react-dom'

import { Acceleration, Force, Gravity } from './src'

const deferUpdates = ReactDOM.unstable_deferredUpdates

class App extends React.Component {
  state = { velocity: 0, acceleration: 0, instance: null, value: 1 }

  // Do not remove deferUpdates. If we simply schedule the state update, then it creates a janky experience on the screen (IDK why, still 😅)
  updateMeasures = ({ acceleration, velocity }) =>
    deferUpdates(() => this.setState({ acceleration, velocity }))

  handleClick = e => this.state.instance.noLoop()

  redraw = e => {
    const value = e.target.value
    deferUpdates(() => this.setState({ value }))
    this.state.instance.redraw(value)
  }

  render() {
    return (
      <div>
        <Force
          width={640}
          height={640}
          color="#ff96ca"
          stroke={0.01}
          applyForce={(ball, Vector) => {
            ball.applyForce(new Vector(0.1, 0.5))
          }}
          background="yellow"
          ballSize={{ width: 20, height: 20 }}
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
