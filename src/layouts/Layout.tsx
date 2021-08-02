import React, { ReactElement } from 'react'
import Header from '@/layouts/header/Header'

interface IProps {
    children: ReactElement | string
}

function Layout(props: IProps) {
    return (
        <>
            <Header />
            {props.children}
        </>
    )
}

export default Layout
