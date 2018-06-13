import React, { Component } from 'react'

// Copied and edited from https://github.com/chrisshiplet/react-delay (LAZINESS BITCH)
export class Delay extends Component {
  static defaultProps = {
    wait: 250
  }

  state = {
    waiting: true
  }

  componentDidMount() {
    this.timer = setTimeout(() => {
      this.setState({
        waiting: false
      })
    }, this.props.wait)
  }

  componentWillUnmount() {
    clearTimeout(this.timer)
  }

  render() {
    return this.props.render(this.state.waiting)
  }
}
