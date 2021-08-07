import React, { useEffect, useState } from 'react'
import { Trans } from 'react-i18next'
import { Typography } from '@material-ui/core'

interface IProps {}

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
        _lessSecond()
    }
    useEffect(() => {
        return () => {
            clearInterval(timer)
        }
    }, [])
    if (disabled) {
        return (
            <Typography>
                <Trans>loginForm.text.retransmit</Trans>({resetTimes}s)
            </Typography>
        )
    }
    return (
        <Typography
            color="primary"
            style={{ cursor: 'pointer' }}
            onClick={getCode}
        >
            <Trans>loginForm.btn.sendCode</Trans>
        </Typography>
    )
}

export default CodeFetcher
