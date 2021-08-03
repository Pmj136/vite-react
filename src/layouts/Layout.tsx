import React, { ReactElement } from 'react'
import Header from './header/Header'
import CopyRight from './copyright/CopyRight'

interface IProps {
    children: ReactElement | string
}

function Layout(props: IProps) {
    return (
        <>
            <Header />
            <section>{props.children}</section>
            <CopyRight />
        </>
    )
}

export default Layout
