import type { RouteItem } from './types'
import NotFound from '@/components/NotFound'

import Home from '@/pages/home/Home'
import Layout from '@/layouts/Layout'
import About from '@/pages/about/About'

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
                component: About,
            },
            {
                path: '*',
                component: NotFound,
            },
        ],
    },
]

export default routes
