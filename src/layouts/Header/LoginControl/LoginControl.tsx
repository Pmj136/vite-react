import React from 'react'
import userStore from '@/store/userStore'
import DropDownLink from './logined/DropDownLink'
import LoginForm from './unlogin/LoginForm'
import { observer } from 'mobx-react-lite'

function LoginControl() {
    const { isLogin } = userStore
    return isLogin ? <DropDownLink /> : <LoginForm />
}

export default observer(LoginControl)
