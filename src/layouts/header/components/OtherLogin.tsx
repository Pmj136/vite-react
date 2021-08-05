import React from 'react'
import { QqLogo, GithubLogo, GiteeLogo } from '@/svg'

import styles from '../styles/otherLogin.module.css'
import { GitHub as GithubIcon } from '@material-ui/icons'

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
                <GithubIcon fontSize="large" />
                <GiteeLogo />
            </div>
        </>
    )
}

export default OtherLogin
