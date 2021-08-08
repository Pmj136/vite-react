import React, { useEffect, useState } from 'react'
import type { TFunction } from 'react-i18next'
import { Typography } from '@material-ui/core'
import { sendCodeApi } from '@/api/user'
import { send } from 'vite'
import { toast } from 'react-hot-toast'

interface IProps {
    t: TFunction
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
        return (
            <Typography>
                {props.t('loginForm.text.retransmit')}({resetTimes}s)
            </Typography>
        )
    }
    return (
        <Typography
            color="primary"
            style={{ cursor: 'pointer' }}
            onClick={getCode}
        >
            {props.t('loginForm.btn.sendCode')}
        </Typography>
    )
}

export default CodeFetcher
