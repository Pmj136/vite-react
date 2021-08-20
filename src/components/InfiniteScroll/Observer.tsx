import React, { useRef } from 'react'
import useIsObserver from '@/hooks/useIsObserver'

interface IProps {
    onShow: () => void
}

function Observer(props: IProps) {
    const observeRef = useRef(null)
    const { onShow } = useIsObserver(observeRef)
    onShow(props.onShow)
    return <div role="observer-tag" ref={observeRef} />
}

export default Observer
