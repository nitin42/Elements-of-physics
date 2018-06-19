import React from 'react'
import { render } from 'react-dom'
import { Router, Link } from '@reach/router'

import { Layout } from './pages/Layout/index'
import { Home } from './pages/Home'

const App = () => (
  <Router>
    <Home path="/" />
    <Layout path="layout" />
  </Router>
)

render(<App />, document.getElementById('root'))
