import React from 'react'
import styles from './header.module.css'
import SearchInput from './components/SearchInput'
import LinkList from './components/LinkList'
import UserAvatar from './components/UserAvatar'
import LoginForm from './components/LoginForm'

interface IProps {}

const isLogin = false

function Header(props: IProps) {
    return (
        <header className={styles['app-header']}>
            <LinkList />
            <SearchInput />
            {isLogin ? <UserAvatar /> : <LoginForm />}
        </header>
    )
}

export default Header
