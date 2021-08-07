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

import styles from '../styles/loginForm.module.css'
import userStore from '@/store/userStore'
import { useTranslation } from 'react-i18next'
import TextDivider from '@/components/TextDivider/TextDivider'

enum LoginTypes {
    PASSWORD = 'password',
    CODE = 'code',
}

function LoginForm() {
    const { t } = useTranslation()
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
    } = useForm()

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
            <Button onClick={handleClickOpen}>{t('header.loginLink')}</Button>
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
                    <h2 className={styles.title1}>
                        {t('loginForm.text.welcome')}
                    </h2>
                    <h3 className={styles.title2}>
                        {t('loginForm.text.info')}
                    </h3>
                    <TextField
                        label={t('loginForm.label.email')}
                        {...register('email', { required: true })}
                        error={!!errors.email}
                        margin="dense"
                        fullWidth
                        autoComplete="off"
                    />

                    {loginType === 'code' && (
                        <TextField
                            label={t('loginForm.label.code')}
                            {...register(LoginTypes.CODE, {
                                required: true,
                                maxLength: 6,
                                minLength: 6,
                            })}
                            error={!!errors.code}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <CodeFetcher t={t} />
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
                            label={t('loginForm.label.password')}
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
                        {loginType === LoginTypes.CODE &&
                            t('loginForm.text.loginType1')}
                        {loginType === LoginTypes.PASSWORD &&
                            t('loginForm.text.loginType2')}
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        disabled={disabled}
                        onClick={onLoginBtnClick}
                    >
                        {t('loginForm.btn.sign')}
                    </Button>
                    <TextDivider>{t('loginForm.text.third')}</TextDivider>
                    <ThirdLogin />
                </div>
            </Dialog>
        </>
    )
}

export default LoginForm
