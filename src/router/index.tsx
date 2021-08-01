import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import RouterControl from 'react-router-control'
import routes from '@/router/routes'

function AppRouter() {
    return (
        <BrowserRouter>
            <RouterControl routes={routes} />
        </BrowserRouter>
    )
}

export default AppRouter
