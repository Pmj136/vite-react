import React, { useState } from 'react'
import {
    Button,
    Dialog,
    IconButton,
    InputAdornment,
    TextField,
} from '@material-ui/core'
import { useForm } from 'react-hook-form'
import { ArrowBack as ArrowBackIcon } from '@material-ui/icons'
import styles from './loginForm.module.css'
import CodeFetcher from './CodeFetcher'
import OtherLogin from './OtherLogin'

interface IProps {}

function LoginForm(props: IProps) {
    const [open, setOpen] = useState(false)
    const {
        register,
        handleSubmit,
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
    const handleLogin = (data: any) => {
        console.log(data)
    }
    return (
        <>
            <Button color="primary" onClick={handleClickOpen}>
                登录
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
                    <h2 className={styles.title1}>欢迎您，</h2>
                    <h3 className={styles.title2}>填写以下信息登录</h3>
                    <TextField
                        label="邮箱"
                        type="email"
                        {...register('email', { required: '请输入邮箱' })}
                        error={!!errors.email}
                        helperText={errors.email ? errors.email.message : ''}
                        margin="dense"
                        fullWidth
                        autoComplete="off"
                    />

                    <TextField
                        label="验证码"
                        type="code"
                        {...register('code', { required: '请输入验证码' })}
                        error={!!errors.code}
                        helperText={errors.code ? errors.code.message : ''}
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
                    <Button
                        style={{ marginTop: 20 }}
                        variant="contained"
                        color="primary"
                        fullWidth
                        onClick={handleSubmit(handleLogin)}
                    >
                        立即登录
                    </Button>
                    <OtherLogin />
                </div>
            </Dialog>
        </>
    )
}

export default LoginForm
