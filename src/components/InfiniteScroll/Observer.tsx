import React, { useEffect, useRef } from 'react'

interface IProps {
    onShow: () => void
}

function Observer(props: IProps) {
    const observeRef = useRef(null)
    const io = new IntersectionObserver(entries => {
        if (entries[0].intersectionRatio <= 0) return
        props.onShow()
    })
    useEffect(() => {
        io.observe(observeRef.current as unknown as Element)
        return () => {
            io.disconnect()
        }
    }, [])

    return <div role="observer-tag" ref={observeRef} />
}

export default Observer
