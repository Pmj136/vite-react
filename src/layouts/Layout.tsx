import React, { ReactElement } from 'react'
import Header from './header/Header'
import Main from './Main'
import CopyRight from './CopyRight'

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
