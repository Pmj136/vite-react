import React, { createElement, FC } from 'react'
import Header from './header/Header'
import Main from './main/Main'
import CopyRight from './footer/CopyRight'

interface IProps {
    view: FC
}

function Layout(props: IProps) {
    return (
        <>
            <Header />
            <Main>{createElement(props.view)}</Main>
            <CopyRight />
        </>
    )
}

export default Layout
