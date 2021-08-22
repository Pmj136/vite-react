import React, { memo } from 'react'
import { Paper } from '@material-ui/core'
import SearchInput from './SearchInput'
import NavLink from './NavLink/NavLink'
import NotificationLink from './NotificationLink'
import ThemeSwitch from './ThemeSwitch'
import GithubLink from './GithubLink'
import LoginControl from './LoginControl/LoginControl'
import WriteLink from './WriteLink'

import styles from './header.module.css'

function Header() {
    return (
        <Paper
            component="header"
            square
            // variant="outlined"
            elevation={0}
            className={styles['app-header']}
        >
            <section className={styles['header-wrap']}>
                <section className={styles['header-item']}>
                    <h2 className={styles.title}>CABIN</h2>
                    <NavLink />
                </section>
                <section className={styles['header-item']}>
                    <SearchInput />
                    <NotificationLink />
                    <ThemeSwitch />
                    <GithubLink />
                    <LoginControl />
                    <WriteLink />
                </section>
            </section>
        </Paper>
    )
}

export default memo(Header)
