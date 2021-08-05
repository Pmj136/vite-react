import React from 'react'
import styles from './header.module.css'
import SearchInput from './components/SearchInput'
import NavList from './components/NavList'
import UserAvatar from './components/UserAvatar'
import LoginForm from './components/LoginForm'
import LanguageSwitch from './components/LanguageSwitch'
import NotificationLink from './components/NotificationLink'
import WriteLink from './components/WriteLink'
import ThemeSwitch from './components/ThemeSwitch'

import logo from '@/assets/logo.svg'
import { Paper } from '@material-ui/core'

interface IProps {}

const isLogin = true

function Header(props: IProps) {
    return (
        <Paper
            component="header"
            square
            elevation={1}
            className={styles['app-header']}
        >
            <section className={styles['header-item']}>
                <img className={styles.logo} src={logo} alt="logo" />
                <NavList />
            </section>
            <section className={styles['header-item']}>
                <SearchInput />
                <LanguageSwitch />
                <ThemeSwitch />
                {isLogin ? (
                    <>
                        <NotificationLink />
                        <UserAvatar />
                    </>
                ) : (
                    <LoginForm />
                )}
                <WriteLink />
            </section>
        </Paper>
    )
}

export default Header
