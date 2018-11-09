import React from 'react'
import { render } from 'react-dom'

const renderApplication = () => {
  const Application = require('./components/Application').default

  render(<Application />, document.getElementById('application'))
}

renderApplication()