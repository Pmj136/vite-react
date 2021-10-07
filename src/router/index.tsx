import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import AuthRoute from './AuthRoute'
import ScrollToTop from './ScrollToTop'
// import Loading from '@/components/Loading'

import Layout from '@/layouts/Layout'
import Home from '@/pages/home/Home'
import Loading from '@/components/Loading'
// import Post from '@/pages/post/Post'
// import About from '@/pages/about/About'
// import Search from '@/pages/search/Search'
// import User from '@/pages/user/User'
// import Setting from '@/pages/setting/Setting'
import Creation from '@/pages/creation/Creation'
import Article from '@/pages/article/Article'

const Post = lazy(() => import('@/pages/post/Post'))
const About = lazy(() => import('@/pages/about/About'))
const Search = lazy(() => import('@/pages/search/Search'))
const User = lazy(() => import('@/pages/user/User'))
// const Creation = lazy(() => import('@/pages/creation/Creation'))
const Setting = lazy(() => import('@/pages/setting/Setting'))
const Notification = lazy(() => import('@/pages/notification/Notification'))

function AppRouter() {
    return (
        <BrowserRouter>
            <ScrollToTop>
                <Switch>
                    <Route
                        path="/"
                        exact
                        render={() => <Layout view={Home} />}
                    />
                    <Route path="/post" render={() => <Layout view={Post} />} />
                    <Route
                        path="/about"
                        render={() => <Layout view={About} />}
                    />
                    <Route
                        path="/article/:id"
                        render={() => <Layout view={Article} />}
                    />
                    <Route
                        path="/search"
                        render={() => <Layout view={Search} />}
                    />
                    <Route
                        path="/user/:id/:type"
                        render={() => <Layout view={User} />}
                    />
                    <AuthRoute
                        authRedirect
                        exact
                        path="/creation"
                        component={Creation}
                    />
                    <AuthRoute
                        authRedirect
                        path="/setting/:component"
                        render={() => <Layout view={Setting} />}
                    />
                    <AuthRoute
                        path="/notification"
                        render={() => <Layout view={Notification} />}
                    />
                    <Redirect path="*" to="/" />
                </Switch>
            </ScrollToTop>
        </BrowserRouter>
    )
}

export default AppRouter
