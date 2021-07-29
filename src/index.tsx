import React from 'react'
import ReactDOM from 'react-dom'
import { ConfigProvider } from 'antd'
import App from './App'
import zhCN from 'antd/lib/locale/zh_CN'
import 'antd/dist/antd.css'

// console.log(import.meta.env.VITE_SOME_KEY)
ReactDOM.render(
    <React.StrictMode>
        <ConfigProvider locale={zhCN}>
            <App />
        </ConfigProvider>
    </React.StrictMode>,
    document.getElementById('vite-react')
)
