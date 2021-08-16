import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
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

function AppRouter() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/post" component={Post} />
                    <Route path="/about" component={About} />
                    <Route path="/search" component={Search} />
                    <Route path="/user/:id/:type" component={User} />
                    <AuthRoute path="/setting/:component" component={Setting} />
                    <AuthRoute path="/notification" component={Notification} />
                    <Route path="*" component={NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default AppRouter
