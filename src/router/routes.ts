import { RouteItem } from 'react-router-control'
import NotFound from '@/router/NotFound'

import Welcome from '@/pages/welcome/Welcome'
import Home from '@/pages/home/Home'
import Layout from '@/layouts/Layout'

const routes: Array<RouteItem> = [
    {
        path: '/',
        component: Layout,
        children: [
            {
                path: '',
                component: Welcome,
                meta: {
                    title: '首页',
                },
            },
        ],
    },
    // {
    //     path: '/home',
    //     component: Home,
    // },
    {
        path: '*',
        component: NotFound,
    },
]

export default routes
