import React, { ComponentType } from 'react'
import userStore from '@/store/userStore'
import { Route } from 'react-router-dom'
import NoPermission from '@/components/NoPermission'
import { observer } from 'mobx-react-lite'

interface IProps {
    path: string
    component: ComponentType<any>
}

function AuthRoute(props: IProps) {
    const { isLogin } = userStore
    return (
        <Route
            path={props.path}
            component={isLogin ? props.component : NoPermission}
        />
    )
}

export default observer(AuthRoute)
