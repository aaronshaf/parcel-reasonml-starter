import React from 'react'
import ReactDOM from 'react-dom'
import { message } from './local.re'
import LocalComponent from './LocalComponent'

ReactDOM.render(
  <div>
    <LocalComponent name="friend" />
    <div>{message}</div>
  </div>,
  document.getElementById('root')
)
