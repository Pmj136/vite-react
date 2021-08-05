import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import RouterControl from './RouterControl'
import routes from './routes'
import Layout from '@/layouts/Layout'

function AppRouter() {
    return (
        <BrowserRouter>
            <Layout>
                <RouterControl routes={routes} />
            </Layout>
        </BrowserRouter>
    )
}

export default AppRouter
