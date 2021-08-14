import React, { ReactElement } from 'react'
import Header from './header/Header'
import Main from './main/Main'
import CopyRight from './footer/CopyRight'
import AutoScrollToTop from './AutoScrollToTop'

interface IProps {
    children: ReactElement
}

function Layout(props: IProps) {
    return (
        <>
            <Header />
            <Main>{props.children}</Main>
            <CopyRight />
            <AutoScrollToTop selector="html" />
        </>
    )
}

export default Layout
