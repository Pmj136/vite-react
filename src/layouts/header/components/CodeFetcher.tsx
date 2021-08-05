import React, { useEffect, useState } from 'react'
import styles from '../styles/coderFetcher.module.css'

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
            <span className={styles['second-view']}>
                重新发送({resetTimes}s)
            </span>
        )
    }
    return (
        <span className={styles['init-view']} onClick={getCode}>
            获取验证码
        </span>
    )
}

export default CodeFetcher
