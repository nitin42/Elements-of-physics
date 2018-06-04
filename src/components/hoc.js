import React from 'react'

const p5 = require('p5')

import { p5Renderer } from '../renderer'

export const hoc = (drawStuffFn, propsGetter) =>
  class extends React.Component {
    instance = null

    componentDidMount() {
      this.getCanvas()
    }

    componentWillUnmount() {
      // Remove the canvas. This ensures that we don't cause a memory leak when a state update is scheduled in one of the props callback
      this.instance && this.instance.remove()
    }

    renderer = p => p5Renderer(p, drawStuffFn, this.props)

    getCanvas = () =>
      new p5(p => {
        this.renderer(p)

        this.instance = p

        // Do some extra stuff here with processing
        this.props.extras && this.props.extras(p)
      }, this.wrapper)

    render() {
      return (
        <div
          ref={wrapper => (this.wrapper = wrapper)}
          {...propsGetter(this.props)}
        />
      )
    }
  }
