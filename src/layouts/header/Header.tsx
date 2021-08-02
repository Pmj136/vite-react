import React from 'react'
import sty from './header.module.css'
import SearchInput from './SearchInput'
import LinkList from '@/layouts/header/LinkList'

interface IProps {}

function Header(props: IProps) {
    return (
        <header className={sty['app-header']}>
            <LinkList />
            <SearchInput />
        </header>
    )
}

export default Header
