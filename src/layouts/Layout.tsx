import React, { ReactElement } from 'react'
import Header from './header/Header'
import Main from './Main'
import CopyRight from './CopyRight'

import styles from './layout.module.css'
import AutoScrollToTop from '@/components/AutoScrollToTop'

interface IProps {
    children: ReactElement
}

function Layout(props: IProps) {
    return (
        <section id="scroll-container" className={styles['app-layout']}>
            <Header />
            <Main>{props.children}</Main>
            <CopyRight />
            <AutoScrollToTop selector="#scroll-container" />
        </section>
    )
}

export default Layout
