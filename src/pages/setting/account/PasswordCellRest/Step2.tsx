import React, { MouseEventHandler } from 'react'
import {
    Button,
    DialogActions,
    DialogContent,
    TextField,
    Typography,
} from '@mui/material'
import { useForm } from 'react-hook-form'
import { updatePwdApi } from '@/api/user'
import { toast } from 'react-hot-toast'

interface IProps {
    onClose: MouseEventHandler<HTMLButtonElement>
}

function Step2(props: IProps) {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm({
        mode: 'onChange',
    })

    const handleConfirm = () => {
        handleSubmit(e => {
            if (e.password !== e.rePassword) {
                setError('rePassword', {
                    message: '两次密码不一致',
                })
                return
            }
            updatePwdApi(e.password).then((res: any) => {
                toast.success(res.msg)
                history.go(0)
            })
        })()
    }

    return (
        <>
            <DialogContent>
                <Typography>请输入您的新密码</Typography>
                <TextField
                    {...register('password', {
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
                    label="新密码"
                    type="password"
                    fullWidth
                    margin="dense"
                    autoComplete="off"
                />
                <TextField
                    {...register('rePassword', {
                        required: '请再次输入密码',
                        minLength: {
                            value: 8,
                            message: '密码不能少于8位',
                        },
                    })}
                    error={!!errors.rePassword}
                    helperText={
                        !!errors.rePassword ? errors.rePassword.message : ''
                    }
                    label="再次确认"
                    type="password"
                    fullWidth
                    margin="dense"
                    autoComplete="off"
                />
            </DialogContent>
            <DialogActions>
                <Button
                    size="small"
                    variant="contained"
                    onClick={props.onClose}
                >
                    取消
                </Button>
                <Button
                    size="small"
                    variant="contained"
                    color="primary"
                    onClick={handleConfirm}
                >
                    完成
                </Button>
            </DialogActions>
        </>
    )
}

export default Step2
