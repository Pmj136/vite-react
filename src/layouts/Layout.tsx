import React, { ReactElement } from 'react'
import Header from './header/Header'
import Main from './main/Main'
import CopyRight from './footer/CopyRight'

interface IProps {
    children: ReactElement
}

function Layout(props: IProps) {
    return (
        <>
            <Header />
            <Main>{props.children}</Main>
            <CopyRight />
        </>
    )
}

export default Layout
