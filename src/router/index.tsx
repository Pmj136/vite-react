import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AuthRoute from './AuthRoute'

import Layout from '@/layouts/Layout'
import Home from '@/pages/home/Home'
import Post from '@/pages/post/Post'
import About from '@/pages/about/About'
import NotFound from '@/components/NotFound'
import Search from '@/pages/search/Search'
import Notification from '@/pages/notification/Notification'
import User from '@/pages/user/User'
import Setting from '@/pages/setting/Setting'
import Push from '@/pages/push/Push'

function AppRouter() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact render={() => <Layout view={Home} />} />
                <Route path="/post" render={() => <Layout view={Post} />} />
                <Route path="/about" render={() => <Layout view={About} />} />
                <Route path="/search" render={() => <Layout view={Search} />} />
                <Route
                    path="/user/:id/:type"
                    render={() => <Layout view={User} />}
                />
                <AuthRoute authRedirect path="/push" component={Push} />
                <AuthRoute
                    authRedirect
                    path="/setting/:component"
                    render={() => <Layout view={Setting} />}
                />
                <AuthRoute
                    path="/notification"
                    render={() => <Layout view={Notification} />}
                />
                <Route path="*" component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouter
