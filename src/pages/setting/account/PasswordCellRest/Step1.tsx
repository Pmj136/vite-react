import React, { ChangeEvent, MouseEventHandler, useState } from 'react'
import {
    Button,
    DialogActions,
    DialogContent,
    InputAdornment,
    TextField,
    Typography,
} from '@mui/material'
import CodeFetcher from '@/components/CodeFetcher'
import { verifyCodeApi } from '@/api/user'

interface IProps {
    email: string
    onClose: MouseEventHandler<HTMLButtonElement>
    onSuccess: () => void
}

function Step1(props: IProps) {
    const [code, setCode] = useState('')
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value
        if (val.length <= 6) setCode(val)
    }
    const handleNext = () => {
        verifyCodeApi(props.email, code).then(() => {
            props.onSuccess()
        })
    }
    return (
        <>
            <DialogContent>
                <Typography>
                    我们需要验证您的身份，查看以下邮箱的验证码
                </Typography>
                <Typography color="textSecondary">{props.email}</Typography>
                <TextField
                    label="验证码"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <CodeFetcher email={props.email} />
                            </InputAdornment>
                        ),
                    }}
                    value={code}
                    onChange={handleChange}
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
                    onClick={handleNext}
                >
                    下一步
                </Button>
            </DialogActions>
        </>
    )
}

export default Step1
