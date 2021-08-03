import React, { ReactElement } from 'react'
import Header from './header/Header'
import Main from './main/Main'
import CopyRight from './copyright/CopyRight'

import styles from './layout.module.css'

interface IProps {
    children: ReactElement
}

function Layout(props: IProps) {
    return (
        <section className={styles['app-layout']}>
            <Header />
            <Main>{props.children}</Main>
            <CopyRight />
        </section>
    )
}

export default Layout
