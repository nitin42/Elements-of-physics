import React from 'react'
import { render } from 'react-dom'
import { Router } from '@reach/router'

import { Layout } from './tool/pages/Layout/index'
import { Home } from './tool/pages/Home'

const App = () => (
  <Router>
    <Home path="/" />
    <Layout path="layout" />
  </Router>
)

render(<App />, document.getElementById('root'))
