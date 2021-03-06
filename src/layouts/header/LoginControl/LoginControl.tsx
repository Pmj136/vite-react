import React from 'react'
import state from '@/store/userStore'
import AvatarFuncList from './AvatarFuncList/AvatarFuncList'
import { observer } from 'mobx-react-lite'
import Login from '@/layouts/header/LoginControl/Login/Login'

function LoginControl() {
    return state.isLogin ? <AvatarFuncList /> : <Login />
}

export default observer(LoginControl)
