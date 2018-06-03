import React from 'react'

const p5 = require('p5')

import { DrawBalls, p5Renderer } from './utils'

const getRestProps = props => {
	const { balls, maxSpeed, color, stroke, width, height, ballSize, measures, extras, ...rest } = props

	return rest
}

export class Acceleration extends React.Component {
	componentDidMount() {
		this.getCanvas()
	}

	// Invoke the p5 renderer
	renderer = p => p5Renderer(p, this.drawStuff, this.props)

	// Draw the balls on canvas
	drawStuff = (p, dispatch, props) => {
		let balls = new Array(props.balls || 20)

		const setup = () => {
			p.createCanvas(props.width, props.height)

			for (let i = 0; i < balls.length; i++) {
				balls[i] = new DrawBalls(p, props)
			}
		}

		const draw = () => {
			p.background(props.background)

			for (let i = 0; i < balls.length; i++) {
				balls[i].updatePosition()
				balls[i].hasCrossedEdge()
				balls[i].displayBalls()
			}
		}

		// Dispatch all the processing core functions
		dispatch([setup, draw])
	}

	getCanvas = () =>
		new p5(p => {
			this.renderer(p)

			// Do some extra stuff here with processing
			this.props.extras && this.props.extras(p)
		}, this.wrapper)

	render() {
		const rest = getRestProps(this.props)

		return <div ref={wrapper => (this.wrapper = wrapper)} {...rest} />
	}
}
