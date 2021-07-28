import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'antd/dist/antd.css'
// console.log(import.meta.env.VITE_SOME_KEY)
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('vite-react')
)
