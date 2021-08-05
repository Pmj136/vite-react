import React from 'react'

import SearchInput from './components/SearchInput'
import NavList from './components/NavList'
import UserAvatar from './components/UserAvatar'
import LoginForm from './components/LoginForm'
import LanguageSwitch from './components/LanguageSwitch'
import NotificationLink from './components/NotificationLink'
import WriteLink from './components/WriteLink'
import ThemeSwitch from './components/ThemeSwitch'

import { Paper } from '@material-ui/core'

import styles from '@/layouts/header/styles/header.module.css'

// import GithubLink from '@/layouts/header/components/GithubLink'

interface IProps {}

const isLogin = true

function Header(props: IProps) {
    return (
        <Paper
            component="header"
            square
            elevation={0}
            className={styles['app-header']}
        >
            <section className={styles['header-item']}>
                <h2 className={styles.title}>CABIN</h2>
                <NavList />
            </section>
            <section className={styles['header-item']}>
                <SearchInput />
                {isLogin && <NotificationLink />}
                <LanguageSwitch />
                <ThemeSwitch />
                {/*<GithubLink />*/}
                {isLogin ? <UserAvatar /> : <LoginForm />}
                <WriteLink />
            </section>
        </Paper>
    )
}

export default Header
