import React from 'react'
import { Button } from '@mui/material'
import LoginDialog from './LoginDialog'
import LoginForm from './LoginForm/LoginForm'
import { setLoginDialogVisible } from '@/store/appStore'

function Login() {
    const showDialog = () => {
        setLoginDialogVisible(true)
    }
    return (
        <>
            <Button color="inherit" onClick={showDialog}>
                登录
            </Button>
            <LoginDialog>
                <LoginForm />
            </LoginDialog>
        </>
    )
}

export default Login
