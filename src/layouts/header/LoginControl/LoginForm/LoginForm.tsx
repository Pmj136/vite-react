import React, { useState } from 'react'
import {
    Button,
    Dialog,
    IconButton,
    InputAdornment,
    TextField,
    Typography,
} from '@material-ui/core'
import { useForm } from 'react-hook-form'
import { ArrowBack as ArrowBackIcon } from '@material-ui/icons'
import CodeFetcher from './CodeFetcher'
import ThirdLogin from './ThirdLogin'
import userStore from '@/store/userStore'
import TextDivider from '@/components/TextDivider/TextDivider'

import styles from './loginform.module.css'

enum LoginTypes {
    PASSWORD = 'password',
    CODE = 'code',
}

function LoginForm() {
    const { login } = userStore
    const [open, setOpen] = useState(false)
    const [loginType, setLoginType] = useState(LoginTypes.CODE)
    const [disabled, setDisabled] = useState(false)

    const {
        register,
        unregister,
        handleSubmit: validForm,
        formState: { errors },
        reset,
        watch,
    } = useForm()

    const email = watch('email')

    const handleClickOpen = () => {
        reset()
        setOpen(true)
    }
    const handleClose = (e: any, reason: string) => {
        if (reason === 'backdropClick') return
        setOpen(false)
    }
    const switchLoginType = () => {
        unregister(loginType)
        if (loginType === LoginTypes.CODE) setLoginType(LoginTypes.PASSWORD)
        else setLoginType(LoginTypes.CODE)
    }
    const onLoginBtnClick = () => {
        validForm(e => {
            setDisabled(true)
            login.call(userStore, { ...e, type: loginType }).finally(() => {
                setDisabled(false)
            })
        })()
    }
    return (
        <>
            <Button onClick={handleClickOpen}>登录</Button>
            <Dialog
                // disablePortal
                disableEscapeKeyDown
                fullWidth
                maxWidth="xs"
                open={open}
                onClose={handleClose}
            >
                <div className={styles['dialog-top']}>
                    <IconButton
                        style={{ marginLeft: -20 }}
                        onClick={e => handleClose(e, 'custom')}
                    >
                        <ArrowBackIcon />
                    </IconButton>
                </div>
                <div className={styles['dialog-wrap']}>
                    <h2 className={styles.title1}>欢迎您，</h2>
                    <h3 className={styles.title2}>填写以下信息登录</h3>
                    <TextField
                        label="邮箱"
                        {...register('email', { required: true })}
                        error={!!errors.email}
                        margin="dense"
                        fullWidth
                        autoComplete="off"
                    />

                    {loginType === 'code' && (
                        <TextField
                            label="验证码"
                            {...register(LoginTypes.CODE, {
                                required: true,
                                maxLength: 6,
                                minLength: 6,
                            })}
                            error={!!errors.code}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <CodeFetcher email={email} />
                                    </InputAdornment>
                                ),
                            }}
                            fullWidth
                            margin="dense"
                            autoComplete="off"
                        />
                    )}

                    {loginType === 'password' && (
                        <TextField
                            label="密码"
                            type="password"
                            {...register(LoginTypes.PASSWORD, {
                                required: true,
                            })}
                            error={!!errors.password}
                            fullWidth
                            margin="dense"
                            autoComplete="off"
                        />
                    )}
                    <Typography
                        color="primary"
                        style={{
                            margin: '10px 0',
                            cursor: 'pointer',
                            userSelect: 'none',
                        }}
                        onClick={switchLoginType}
                    >
                        {loginType === LoginTypes.CODE && '使用密码登录'}
                        {loginType === LoginTypes.PASSWORD && '使用验证码登录'}
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        disabled={disabled}
                        onClick={onLoginBtnClick}
                    >
                        立即登录
                    </Button>
                    <TextDivider>其他登录方式</TextDivider>
                    <ThirdLogin />
                </div>
            </Dialog>
        </>
    )
}

export default LoginForm
