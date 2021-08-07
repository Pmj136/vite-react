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
import { Trans } from 'react-i18next'
import TextDriver from '@/components/TextDriver/TextDriver'

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
            <Button onClick={handleClickOpen}>
                <Trans>header.loginLink</Trans>
            </Button>
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
                        <Trans>loginForm.text.welcome</Trans>
                    </h2>
                    <h3 className={styles.title2}>
                        <Trans>loginForm.text.info</Trans>
                    </h3>
                    <TextField
                        label={<Trans>loginForm.label.email</Trans>}
                        {...register('email', { required: true })}
                        error={!!errors.email}
                        margin="dense"
                        fullWidth
                        autoComplete="off"
                    />

                    {loginType === 'code' && (
                        <TextField
                            label={<Trans>loginForm.label.code</Trans>}
                            {...register(LoginTypes.CODE, {
                                required: true,
                                maxLength: 6,
                                minLength: 6,
                            })}
                            error={!!errors.code}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <CodeFetcher />
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
                            label={<Trans>loginForm.label.password</Trans>}
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
                        {loginType === LoginTypes.CODE && (
                            <Trans>loginForm.text.loginType1</Trans>
                        )}
                        {loginType === LoginTypes.PASSWORD && (
                            <Trans>loginForm.text.loginType2</Trans>
                        )}
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        disabled={disabled}
                        onClick={onLoginBtnClick}
                    >
                        <Trans>loginForm.btn.sign</Trans>
                    </Button>
                    <TextDriver>
                        <Trans>loginForm.text.third</Trans>
                    </TextDriver>
                    <ThirdLogin />
                </div>
            </Dialog>
        </>
    )
}

export default LoginForm
