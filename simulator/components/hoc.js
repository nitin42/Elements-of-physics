// @flow

import * as React from 'react'

import { p5Renderer } from '../physics/renderer'

import type { instance, drawStuff, mixedProps, propsGetter } from '../types'

import p5 from 'p5/lib/p5.min' //loads the correct minified 388KB file!

export const hoc = (
  drawStuffFn: drawStuff,
  propsGetter: propsGetter
): React.ComponentType<any> =>
  class extends React.PureComponent<mixedProps, void> {
    instance: instance
    wrapper: null
    id: null

    componentDidMount() {
      this.getCanvas()
    }

    componentDidUpdate() {
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
        this.instance = p

        this.renderer(p)

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
