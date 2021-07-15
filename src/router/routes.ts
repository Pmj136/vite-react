import { lazy } from 'react'
import { RouteItem } from 'react-router-control'
import NotFound from '@/router/NotFound'

// import Welcome from "@/pages/welcome/welcome"
// import Home from "@/pages/home/home"
const Welcome = lazy(() => import('@/pages/welcome/Welcome')),
    Home = lazy(() => import('@/pages/home/Home'))
const routes: Array<RouteItem> = [
    {
        path: '/',
        component: Welcome,
    },
    {
        path: '/home',
        component: Home,
    },
    {
        path: '*',
        component: NotFound,
    },
]

export default routes
