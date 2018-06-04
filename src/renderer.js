// Receives p5 instance and a callback to draw the stuff on canvas
export const p5Renderer = (instance, callback, props) => {
  // Dispatches all the processing functions
  const dispatch = fns => {
    fns.forEach(fn => {
      if (typeof fn === 'function') {
        instance[fn.name] = fn
      }
    })
  }

  callback(instance, dispatch, props)
}
