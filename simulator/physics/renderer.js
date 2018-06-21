// @flow

import type { instance, mixedProps } from '../types'

// Receives p5 instance and a callback to draw the stuff on canvas
export const p5Renderer = (
  instance: instance,
  callback: Function,
  props: mixedProps
) => {
  // TODO: Dispatching processing core function don't work when deployed
  callback(instance, props)
}
