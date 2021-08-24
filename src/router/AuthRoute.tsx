import React, { ComponentType } from 'react'
import state from '@/store/userStore'
import { Route, Redirect } from 'react-router-dom'
import NoPermission from '@/components/NoPermission'
import { observer } from 'mobx-react-lite'
import { RouteComponentProps } from 'react-router'
import Layout from '@/layouts/Layout'

interface IProps {
    exact?: boolean
    path: string
    component?: ComponentType<any> | undefined
    render?: ((props: RouteComponentProps<any>) => React.ReactNode) | undefined
    authRedirect?: boolean
}

function AuthRoute(props: IProps) {
    if (!state.isLogin) {
        if (props.authRedirect)
            return (
                <Route exact path={props.path}>
                    <Redirect to="/" />
                </Route>
            )
        return (
            <Route
                exact={props.exact || false}
                path={props.path}
                render={() => <Layout view={NoPermission} />}
            />
        )
    }
    return (
        <Route
            exact={props.exact || false}
            path={props.path}
            component={props.component}
            render={props.render}
        />
    )
}

export default observer(AuthRoute)
