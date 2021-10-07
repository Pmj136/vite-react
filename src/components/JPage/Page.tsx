import React, { CSSProperties, ReactNode } from 'react'

interface IProps {
    width?: number | string
    spacing?: number
    children: ReactNode
    directionMargin?: number
    minHeight?: string | number
}

function Page({
    width,
    children,
    spacing = 16,
    directionMargin = 16,
    minHeight,
}: IProps) {
    const style: CSSProperties = { width, margin: `${directionMargin}px auto` }
    if (children instanceof Array) {
        style.gap = spacing + 'px'
    }
    if (minHeight !== undefined) {
        style.minHeight = minHeight
    }
    return (
        <div className="j-page" style={style}>
            {children}
        </div>
    )
}

export default Page
