import React from 'react'
import { QqLogo, GiteeLogo } from '@/svg'
import { GitHub as GithubIcon } from '@material-ui/icons'

import styles from './thirdLogin.module.css'

function ThirdLogin() {
    return (
        <div className={styles['svg-container']}>
            <QqLogo />
            <GithubIcon fontSize="large" />
            <GiteeLogo />
        </div>
    )
}

export default ThirdLogin
