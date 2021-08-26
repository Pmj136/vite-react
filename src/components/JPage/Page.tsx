import React, { CSSProperties, ReactNode, useEffect } from 'react'

interface IProps {
    autoScrollToTop?: boolean
    width?: number | string
    spacing?: number
    children: ReactNode
    directionMargin?: number
}

function Page({
    autoScrollToTop = true,
    width,
    children,
    spacing = 16,
    directionMargin = 16,
}: IProps) {
    const style: CSSProperties = { width, margin: `${directionMargin}px auto` }
    if (children instanceof Array) {
        style.gap = spacing + 'px'
    }
    useEffect(() => {
        if (autoScrollToTop) {
            const el = document.querySelector('html') as Element
            el.scrollTo(0, 0)
        }
    }, [])
    return (
        <div className="j-page" style={style}>
            {children}
        </div>
    )
}

export default Page
