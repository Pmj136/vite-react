import React, { ComponentType, createElement, ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'

interface IProps {
    component: ComponentType<any>
    children: ReactNode
    to: string
    replace?: boolean
}

function ButtonLink(props: IProps) {
    const location = useLocation()
    return createElement(props.component, {
        component: Link,
        to: props.to,
        replace: props.replace || false,
        children: props.children,
        color: location.pathname === props.to ? 'primary' : 'default',
    })
}

export default ButtonLink
