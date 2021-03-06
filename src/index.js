import React from 'react'
import { render } from 'react-dom'
import { Router } from '@reach/router'

import { Layout, Home } from './module-build'

import './styles.css'

const App = () => (
  <Router>
    <Home path="/" />
    <Layout path="layout" />
  </Router>
)

render(<App />, document.getElementById('root'))
