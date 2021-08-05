import React, { ComponentType } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { RouteItem, RouterControlProps } from './types'

function renderRoutes(routes: Array<RouteItem>) {
    return (
        <Switch>
            {routes.map((v, i) => {
                const path = v.path
                if (v.redirect !== undefined) {
                    return (
                        <Route key={i} exact path={path}>
                            <Redirect to={v.redirect} />
                        </Route>
                    )
                }
                if (v.path === '*') {
                    return <Route key={i} component={v.component} />
                }
                return (
                    <Route
                        key={i}
                        sensitive
                        exact={
                            v.path === '/' &&
                            (!v.children || v.children.length === 0)
                        }
                        path={path}
                        render={props => {
                            const Child: ComponentType<any> = v.component
                            if (v.children && v.children.length > 0) {
                                return <Child>{renderRoutes(v.children)}</Child>
                            }
                            const title = v?.meta?.title
                            if (title) document.title = title
                            return <Child {...props} meta={v.meta} />
                        }}
                    />
                )
            })}
        </Switch>
    )
}

export default function RouterControl(props: RouterControlProps) {
    return renderRoutes(props.routes)
}
