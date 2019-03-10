import React from 'react'
import ReactDOM from 'react-dom'
import TabbedDisplay from './TabbedDisplay'

import './styles.css'

function App() {
  return <TabbedDisplay />
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
