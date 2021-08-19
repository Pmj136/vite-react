import React, { CSSProperties, ReactNode, useEffect } from 'react'
import styles from './_.module.css'

interface IProps {
    autoScrollToTop?: boolean
    width?: number | string
    spacing?: number
    children: ReactNode
}

function InnerPage({
    autoScrollToTop = true,
    width,
    children,
    spacing = 16,
}: IProps) {
    const style: CSSProperties = { width }
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
        <div className={styles.page} style={style}>
            {children}
        </div>
    )
}

export default InnerPage
