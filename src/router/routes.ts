import { RouteItem } from 'react-router-control'
import NotFound from '@/router/NotFound'

import Welcome from '@/pages/welcome/Welcome'
import Home from '@/pages/home/Home'

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
