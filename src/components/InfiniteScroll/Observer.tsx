import React from 'react'
import useIsObserver from '@/hooks/useIsObserver'

interface IProps {
    onShow: () => void
}

function Observer(props: IProps) {
    const observeRef = useIsObserver({
        onShow: props.onShow,
    })
    return <div role="observer-tag" ref={observeRef} />
}

export default Observer
