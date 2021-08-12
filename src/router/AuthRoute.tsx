import React, { ComponentType } from 'react'
import userStore from '@/store/userStore'
import { Route } from 'react-router-dom'
import NoPermission from '@/components/NoPermission'
import { observer } from 'mobx-react-lite'

interface IProps {
    exact?: boolean
    path: string
    component: ComponentType<any>
}

function AuthRoute(props: IProps) {
    const { isLogin } = userStore
    return (
        <Route
            exact={props.exact || false}
            path={props.path}
            component={isLogin ? props.component : NoPermission}
        />
    )
}

export default observer(AuthRoute)
