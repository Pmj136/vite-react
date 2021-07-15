import React from 'react'
import ReactDOM from 'react-dom'

import 'normalize.css/normalize.css'
import './index.css'
import App from './App'

// console.log(import.meta.env.VITE_SOME_KEY)
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('vite-react')
)
