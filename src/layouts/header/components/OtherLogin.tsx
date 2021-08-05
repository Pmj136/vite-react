import React from 'react'
import { QqLogo, GithubLogo, GiteeLogo } from '@/svg'

import styles from '../styles/otherLogin.module.css'

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
