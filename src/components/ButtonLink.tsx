import React, { ComponentType, createElement, ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'

interface IProps {
    component: ComponentType<any>
    children: ReactNode
    to: string
}

function ButtonLink(props: IProps) {
    const location = useLocation()
    return createElement(props.component, {
        component: Link,
        to: props.to,
        children: props.children,
        color: location.pathname === props.to ? 'primary' : 'default',
    })
}

export default ButtonLink
