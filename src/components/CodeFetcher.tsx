import React, { useEffect, useState } from 'react'
import { Typography } from '@mui/material'
import { sendCodeApi } from '@/api/user'
import { toast } from 'react-hot-toast'

interface IProps {
    auto?: boolean
    email: string
    onError?: (message: string) => void
}

const INIT_SECONDS = 59
let timer: NodeJS.Timer

function CodeFetcher({ auto = false, email, onError }: IProps) {
    const [disabled, setDisabled] = useState(false)
    const [restSeconds, setRestSeconds] = useState(INIT_SECONDS)
    const _lessSecond = () => {
        setDisabled(true)
        timer = setInterval(() => {
            setRestSeconds((prevState: number) => {
                if (prevState === 1) {
                    clearInterval(timer)
                    setDisabled(false)
                    return INIT_SECONDS
                }
                return prevState - 1
            })
        }, 1000)
    }
    const getCode = () => {
        if (!email) {
            onError && onError('请输入邮箱')
            return
        }
        if (!/^\w+\@+[0-9a-zA-Z]+\.(com|com.cn|edu|hk|cn|net)$/.test(email)) {
            onError && onError('请输入正确的邮箱')
            return
        }
        sendCodeApi(email)
            .then((res: any) => {
                toast.success(res.msg)
                _lessSecond()
            })
            .catch(err => {
                if (err.data && typeof err.data === 'number') {
                    setRestSeconds(err.data)
                    _lessSecond()
                }
            })
    }
    useEffect(() => {
        if (auto) {
            getCode()
        }
        return () => {
            clearInterval(timer)
        }
    }, [])
    if (disabled) {
        return <Typography>重新发送({restSeconds}s)</Typography>
    }
    return (
        <Typography
            color="primary"
            style={{ cursor: 'pointer' }}
            onClick={getCode}
        >
            发送验证码
        </Typography>
    )
}

export default CodeFetcher
