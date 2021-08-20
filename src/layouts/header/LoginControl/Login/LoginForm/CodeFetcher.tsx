import React, { useEffect, useState } from 'react'
import { Typography } from '@material-ui/core'
import { sendCodeApi } from '@/api/user'
import { toast } from 'react-hot-toast'

interface IProps {
    email: string
    setEmailError: (message: string) => void
}

const INIT_SECONDS = 59
let timer: NodeJS.Timer

function CodeFetcher(props: IProps) {
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
        if (!props.email) {
            props.setEmailError('请输入邮箱')
            return
        }
        if (
            !/^\w+\@+[0-9a-zA-Z]+\.(com|com.cn|edu|hk|cn|net)$/.test(
                props.email
            )
        ) {
            props.setEmailError('请输入正确的邮箱')
            return
        }
        sendCodeApi(props.email).then((res: any) => {
            toast.success(res.msg)
            _lessSecond()
        })
    }
    useEffect(() => {
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
