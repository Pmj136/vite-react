import React, { useRef } from 'react'
import { useIntersectionObserver } from '@/hooks'

interface IProps {
    onShow: () => void
}

function Observer(props: IProps) {
    const observeRef = useRef(null)
    const { onShow } = useIntersectionObserver(observeRef)
    onShow(props.onShow)
    return <div role="observer-tag" ref={observeRef} />
}

export default Observer
