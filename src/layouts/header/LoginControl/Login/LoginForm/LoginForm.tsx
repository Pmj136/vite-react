import React, { useState } from 'react'
import {
    Button,
    IconButton,
    InputAdornment,
    TextField,
    Typography,
} from '@material-ui/core'
import { ArrowBack as ArrowBackIcon } from '@material-ui/icons'
import { useForm } from 'react-hook-form'
import { setLoginDialogVisible } from '@/store/appStore'
import { savaUser } from '@/store/userStore'
import TextDivider from '@/components/TextDivider/TextDivider'
import CodeFetcher from './CodeFetcher'
import ThirdLogin from './ThirdLogin'
import styles from './loginform.module.css'
import { loginApi } from '@/api/user'

enum LoginTypes {
    PASSWORD = 'password',
    CODE = 'code',
}

function LoginForm() {
    const [loginType, setLoginType] = useState(LoginTypes.CODE)
    const [disabled, setDisabled] = useState(false)
    const {
        register,
        unregister,
        handleSubmit: validForm,
        formState: { errors },
        watch,
        setError,
    } = useForm()
    const email = watch('email')
    const hideDialog = () => {
        setLoginDialogVisible(false)
    }
    const switchLoginType = () => {
        unregister(loginType)
        if (loginType === LoginTypes.CODE) setLoginType(LoginTypes.PASSWORD)
        else setLoginType(LoginTypes.CODE)
    }

    const onEmailError = (message: string) => {
        setError('email', {
            message,
        })
    }
    const onLoginBtnClick = () => {
        validForm(e => {
            setDisabled(true)
            loginApi({ ...e, type: loginType })
                .then(res => {
                    savaUser(res.data)
                    history.go(0)
                })
                .finally(() => {
                    setDisabled(false)
                })
        })()
    }
    return (
        <>
            <div className={styles['dialog-top']}>
                <IconButton style={{ marginLeft: -20 }} onClick={hideDialog}>
                    <ArrowBackIcon />
                </IconButton>
            </div>
            <div className={styles['dialog-wrap']}>
                <h2 className={styles.title1}>欢迎您，</h2>
                <h3 className={styles.title2}>填写以下信息登录</h3>
                <TextField
                    label="邮箱"
                    {...register('email', {
                        required: '请输入邮箱',
                        pattern: {
                            value: /^\w+\@+[0-9a-zA-Z]+\.(com|com.cn|edu|hk|cn|net)$/,
                            message: '请输入正确的邮箱',
                        },
                    })}
                    error={!!errors.email}
                    helperText={!!errors.email ? errors.email.message : ''}
                    margin="dense"
                    fullWidth
                    autoComplete="off"
                />

                {loginType === 'code' && (
                    <TextField
                        label="验证码"
                        {...register(LoginTypes.CODE, {
                            required: '请输入6位验证码',
                            maxLength: 6,
                            minLength: 6,
                        })}
                        error={!!errors.code}
                        helperText={!!errors.code ? errors.code.message : ''}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <CodeFetcher
                                        email={email}
                                        setEmailError={onEmailError}
                                    />
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
                            required: '请输入密码',
                            minLength: {
                                value: 8,
                                message: '密码不能少于8位',
                            },
                        })}
                        error={!!errors.password}
                        helperText={
                            !!errors.password ? errors.password.message : ''
                        }
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
        </>
    )
}

export default LoginForm
