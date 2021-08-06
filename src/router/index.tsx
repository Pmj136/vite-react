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

function AppRouter() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <AuthRoute path="/post" component={Post} />
                    <Route path="/about" component={About} />
                    <Route path="/search" component={Search} />
                    <Route path="/notification" component={Notification} />
                    <Route path="*" component={NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default AppRouter
