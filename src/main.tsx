import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './i18n'
import App from './App'
import auth from '@/utils/auth'

auth()
ReactDOM.render(<App />, document.getElementById('app'))
