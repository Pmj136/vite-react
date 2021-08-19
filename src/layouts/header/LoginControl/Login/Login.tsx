import React from 'react'
import { Button } from '@material-ui/core'
import LoginDialog from './LoginDialog'
import LoginForm from './LoginForm/LoginForm'
import { setLoginDialogVisible } from '@/store/appStore'

function Login() {
    const showDialog = () => {
        setLoginDialogVisible(true)
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
