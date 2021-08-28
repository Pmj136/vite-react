import React, { createElement, FC, Suspense } from 'react'
import Header from './header/Header'
import Main from './main/Main'
import CopyRight from './footer/CopyRight'
import Loading from '@/components/Loading'

interface IProps {
    view: FC
}

function Layout(props: IProps) {
    return (
        <>
            <Header />
            <Main>
                <Suspense fallback={<Loading />}>
                    {createElement(props.view)}
                </Suspense>
            </Main>
            <CopyRight />
        </>
    )
}

export default Layout
