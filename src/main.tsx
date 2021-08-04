import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css/normalize.css'
import './index.css'
import App from './App'
import './i18n'
import { Toaster } from 'react-hot-toast'

// console.log(import.meta.env.VITE_SOME_KEY)
ReactDOM.render(
    <>
        <App />
        <Toaster
            containerStyle={{
                top: 70,
            }}
        />
    </>,
    document.getElementById('app')
)
