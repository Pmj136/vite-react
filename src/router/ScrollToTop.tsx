import React, { ReactNode, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

interface IProps {
    children: ReactNode
    whiteList?: string[]
}

function ScrollToTop({ children, whiteList = [] }: IProps) {
    const location = useLocation()
    useEffect(() => {
        if (!whiteList.includes(location.pathname)) {
            const el = document.querySelector('html') as Element
            el.scrollTo(0, 0)
        }
    }, [location.pathname])
    return <>{children}</>
}

export default ScrollToTop
