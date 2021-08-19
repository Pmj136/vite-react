import React, { ReactNode } from 'react'

interface IProps {
    xs: number
    children: ReactNode
}

function Section(props: IProps) {
    const width = (props.xs / 12) * 100
    return <section style={{ width: width + '%' }}>{props.children}</section>
}

export default Section
