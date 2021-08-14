import React from 'react'
import QqLogo from '@/svg/QQ'
import GiteeLogo from '@/svg/Gitee'
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
