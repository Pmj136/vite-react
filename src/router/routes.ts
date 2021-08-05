import type { RouteItem } from './types'
import NotFound from '@/components/NotFound'

import Welcome from '@/pages/welcome/Welcome'
import Home from '@/pages/home/Home'
import Layout from '@/layouts/Layout'

const routes: Array<RouteItem> = [
    {
        path: '/',
        component: Layout,
        children: [
            {
                path: '/',
                component: Home,
            },
            {
                path: '/about',
                component: Welcome,
            },
            {
                path: '*',
                component: NotFound,
            },
        ],
    },
]

export default routes
