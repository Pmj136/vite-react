import React, { CSSProperties, ReactNode } from 'react'

interface IProps {
    xs: number
    children: ReactNode
    style?: CSSProperties
}

function PageSection({ xs, children, style }: IProps) {
    const width = (xs / 12) * 100
    const styleObj: CSSProperties = {
        width: width + '%',
        height: '100%',
        ...style,
    }
    return <section style={styleObj}>{children}</section>
}

export default PageSection
