import React, { useEffect, useState } from 'react'
import { Typography } from '@material-ui/core'
import { sendCodeApi } from '@/api/user'
import { toast } from 'react-hot-toast'

interface IProps {
    email: string
}

const INIT_SECONDS = 59
let timer: NodeJS.Timer

function CodeFetcher(props: IProps) {
    const [disabled, setDisabled] = useState(false)
    const [resetTimes, setResetTimes] = useState(INIT_SECONDS)
    const _lessSecond = () => {
        setDisabled(true)
        timer = setInterval(() => {
            setResetTimes((prevState: number) => {
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
            toast('请输入验证码')
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
        return <Typography>重新发送({resetTimes}s)</Typography>
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
