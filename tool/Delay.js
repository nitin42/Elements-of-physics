import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Copied and edited from https://github.com/chrisshiplet/react-delay
class Delay extends Component {
  static propTypes = {
    render: PropTypes.func,
    wait: PropTypes.number
  }

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

export default Delay
