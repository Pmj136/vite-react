import React from 'react'
import { Button } from '@material-ui/core'
import LoginDialog from './LoginDialog'
import LoginForm from './LoginForm/LoginForm'
import appStore from '@/store/appStore'

function Login() {
    const { setLoginDialogVisible } = appStore
    const showDialog = () => {
        setLoginDialogVisible.call(appStore, true)
    }
    return (
        <>
            <Button onClick={showDialog}>登录</Button>
            <LoginDialog>
                <LoginForm />
            </LoginDialog>
        </>
    )
}

export default Login
