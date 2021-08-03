import React from 'react'
import styles from './otherLogin.module.css'
import { QqLogo, GithubLogo, GiteeLogo } from '@/svg'

interface IProps {}

function OtherLogin(props: IProps) {
    return (
        <>
            <div className={styles['or-box']}>
                <div className={styles['or-box-line']} />
                <div className={styles['or-box-text']}>其他登录方式</div>
                <div className={styles['or-box-line']} />
            </div>
            <div className={styles['svg-container']}>
                <QqLogo />
                <GithubLogo />
                <GiteeLogo />
            </div>
        </>
    )
}

export default OtherLogin
