import React from 'react'
import userStore from '@/store/userStore'
import AvatarFuncList from './AvatarFuncList/AvatarFuncList'
import { observer } from 'mobx-react-lite'
import Login from '@/layouts/header/LoginControl/Login/Login'

function LoginControl() {
    const { isLogin } = userStore
    return isLogin ? <AvatarFuncList /> : <Login />
}

export default observer(LoginControl)
