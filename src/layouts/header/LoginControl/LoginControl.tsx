import React from 'react'
import userStore from '@/store/userStore'
import AvatarFuncList from './AvatarFuncList/AvatarFuncList'
import LoginForm from './LoginForm/LoginForm'
import { observer } from 'mobx-react-lite'

function LoginControl() {
    const { isLogin } = userStore
    return isLogin ? <AvatarFuncList /> : <LoginForm />
}

export default observer(LoginControl)
