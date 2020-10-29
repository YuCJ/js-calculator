/* entry */
import ReactDOM from 'react-dom'
import React from 'react'
import App from './components/app'

function handleReady() {
  ReactDOM.render(<App />,document.getElementById('root'))
}

window.addEventListener('load', handleReady)
