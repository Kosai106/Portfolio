import React        from 'react'
import ReactDOM     from 'react-dom'
import All          from './all'

require('../scss/app.scss');

const app = document.getElementById('app')

ReactDOM.render(
  <All />, app
)
