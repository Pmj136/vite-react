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
import appStore from '@/store/appStore'
import userStore from '@/store/userStore'
import TextDivider from '@/components/TextDivider/TextDivider'
import CodeFetcher from './CodeFetcher'
import ThirdLogin from './ThirdLogin'

import styles from './loginform.module.css'

enum LoginTypes {
    PASSWORD = 'password',
    CODE = 'code',
}

function LoginForm() {
    const { login } = userStore
    const { setLoginFormVisible } = appStore
    const [loginType, setLoginType] = useState(LoginTypes.CODE)
    const [disabled, setDisabled] = useState(false)
    const {
        register,
        unregister,
        handleSubmit: validForm,
        formState: { errors },
        watch,
    } = useForm()
    const email = watch('email')
    const hideDialog = () => {
        setLoginFormVisible.call(appStore, false)
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
        </>
    )
}

export default LoginForm
