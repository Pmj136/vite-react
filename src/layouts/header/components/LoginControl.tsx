import React from 'react'
import userStore from '@/store/userStore'
import UserAvatar from './UserAvatar'
import LoginForm from './LoginForm'
import { observer } from 'mobx-react-lite'

function LoginControl() {
    const { isLogin } = userStore
    if (isLogin) return <UserAvatar />
    return <LoginForm />
}

export default observer(LoginControl)
