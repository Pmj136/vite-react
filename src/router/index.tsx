import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import RouterControl from './RouterControl'
import routes from './routes'

function AppRouter() {
    return (
        <BrowserRouter>
            <RouterControl routes={routes} />
        </BrowserRouter>
    )
}

export default AppRouter
