import type { RouteItem } from './types'
import NoPermission from '@/components/NoPermission'
import NotFound from '@/components/NotFound'

import Home from '@/pages/home/Home'
import About from '@/pages/about/About'
import Post from '@/pages/post/Post'

const routes: Array<RouteItem> = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/post',
        component: Post,
        auth: true,
    },
    {
        path: '/about',
        component: About,
    },
    {
        path: '/403',
        component: NoPermission,
    },
    {
        path: '*',
        component: NotFound,
    },
]

export default routes
