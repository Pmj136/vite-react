import React from 'react'

import SearchInput from './components/SearchInput'
import NavList from './components/NavList'
import LanguageSwitch from './components/LanguageSwitch'
import NotificationLink from './components/NotificationLink'
import ThemeSwitch from './components/ThemeSwitch'
// import GithubLink from './components/GithubLink'
import LoginControl from './components/LoginControl'
import WriteLink from './components/WriteLink'

import { Paper } from '@material-ui/core'

import styles from '@/layouts/header/styles/header.module.css'

interface IProps {}

function Header(props: IProps) {
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
                    <NavList />
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
