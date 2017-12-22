import React from 'react'
import ReactDOM from 'react-dom'
import { message } from './local.re'
// import LocalComponent from './LocalComponent'

ReactDOM.render(
  <div>
    <div>{message}</div>
  </div>,
  document.getElementById('root')
)
