import React from 'react'
import ReactDOM from 'react-dom'

import { Acceleration } from './src'

const deferUpdates = ReactDOM.unstable_deferredUpdates

class App extends React.Component {
	state = { velocity: 0, acceleration: 0, instance: null, value: 1 }

	// Do not remove deferUpdates. If we simply schedule the state update, then it creates a janky experience on the screen
	updateMeasures = ({ acceleration, velocity }) => deferUpdates(() => this.setState({ acceleration, velocity }))

	handleClick = e => this.state.instance.noLoop()

	redraw = e => {
		const value = e.target.value
		deferUpdates(() => this.setState({ value }))
		this.state.instance.redraw(value)
	}

	render() {
		return (
			<React.Fragment>
				<Acceleration
					width={640}
					height={640}
					balls={300}
					color="mistyrose"
					stroke={1.8}
					maxSpeed={10}
					background="yellow"
					ballSize={{ width: 30, height: 30 }}
					measures={this.updateMeasures}
					extras={p => this.setState({ instance: p })}
					onClick={this.handleClick}
					onContextMenu={e => {
						e.preventDefault()
						this.state.instance.loop()
					}}
				/>
				<input type="range" min="1" max="130" value={this.state.value} onChange={this.redraw} />
			</React.Fragment>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'))
