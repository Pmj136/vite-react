import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

interface IProps {
    selector: string
}

function AutoScrollToTop(props: IProps) {
    const location = useLocation()
    useEffect(() => {
        ;(document.querySelector(props.selector) as Element).scrollTo(0, 0)
    }, [location.pathname])
    return null
}

export default AutoScrollToTop
