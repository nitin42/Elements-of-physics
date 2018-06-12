// @flow

import * as React from 'react'
const p5 = require('p5')

import { p5Renderer } from '../renderer'

import type { instance, drawStuff, mixedProps, propsGetter } from '../types'

const rAF = window.requestAnimationFrame
const cAF = window.cancelAnimationFrame

export const hoc = (
  drawStuffFn: drawStuff,
  propsGetter: propsGetter
): React.ComponentType<any> =>
  class extends React.Component<mixedProps, void> {
    instance: null
    wrapper: null
    id: null

    componentDidMount() {
      this.getCanvas()
    }

    componentDidUpdate() {
      // $FlowFixMe
      this.instance.remove()

      this.getCanvas()
    }

    componentWillUnmount() {
      // Remove the canvas. This ensures that we don't cause a memory leak when a state update is scheduled in one of the props callback
      this.instance && this.instance.remove()
    }

    renderer = (p: instance) => p5Renderer(p, drawStuffFn, this.props)

    getCanvas = () =>
      new p5(p => {
        this.renderer(p)
        this.instance = p

        // Do some extra stuff here with processing
        this.props.extras && this.props.extras(p)
      }, this.wrapper)

    render(): React.Node {
      return (
        <div
          ref={wrapper => (this.wrapper = wrapper)}
          {...propsGetter(this.props)}
        />
      )
    }
  }
