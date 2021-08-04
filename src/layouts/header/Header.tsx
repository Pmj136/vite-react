import React from 'react'
import styles from './header.module.css'
import SearchInput from './components/SearchInput'
import NavList from './components/NavList'
import UserAvatar from './components/UserAvatar'
import LoginForm from './components/LoginForm'
import LanguageSwitch from './components/LanguageSwitch'
import NotificationLink from './components/NotificationLink'
import WriteLink from './components/WriteLink'

import logo from '@/assets/logo.svg'
import { Box } from '@material-ui/core'

interface IProps {}

const isLogin = true

function Header(props: IProps) {
    return (
        <header className={styles['app-header']}>
            <section className={styles['header-item']}>
                <img className={styles.logo} src={logo} alt="logo" />
            </section>
            <section className={styles['header-item']}>
                <NavList />
            </section>
            <section className={styles['header-item']}>
                <SearchInput />
                <Box m={0.8} />
                <LanguageSwitch />
                {isLogin ? (
                    <>
                        <NotificationLink />
                        <UserAvatar />
                    </>
                ) : (
                    <LoginForm />
                )}
                <Box m={0.8} />
                <WriteLink />
            </section>
        </header>
    )
}

export default Header
