import React from 'react'
import { Paper } from '@material-ui/core'

import SearchInput from './SearchInput'
import NavLink from './NavLink/NavLink'
import LanguageSwitch from './LanguageSwitch'
import NotificationLink from './NotificationLink'
import ThemeSwitch from './ThemeSwitch'
// import GithubLink from './components/GithubLink'
import LoginControl from './LoginControl/LoginControl'
import WriteLink from './WriteLink'

import styles from './header.module.css'

function Header() {
    return (
        <Paper
            component="header"
            square
            elevation={0}
            className={styles['app-header']}
        >
            <section className={styles.container}>
                <section className={styles['header-item']}>
                    <h2 className={styles.title}>CABIN</h2>
                    <NavLink />
                </section>
                <section className={styles['header-item']}>
                    <SearchInput />
                    <NotificationLink />
                    <LanguageSwitch />
                    <ThemeSwitch />
                    {/*<GithubLink />*/}
                    <LoginControl />
                    <WriteLink />
                </section>
            </section>
        </Paper>
    )
}

export default Header
