import { RefObject, useEffect, useRef } from 'react'

interface IProps {
    onShow?: () => void
    onHide?: () => void
}

function useIsObserver(props: IProps): RefObject<any> {
    const observeRef = useRef(null)
    const io = new IntersectionObserver(entries => {
        if (entries[0].intersectionRatio === 0) {
            props.onHide && props.onHide()
            return
        }
        props.onShow && props.onShow()
    })
    useEffect(() => {
        io.observe(observeRef.current as unknown as Element)
        return () => {
            io.disconnect()
        }
    }, [])
    return observeRef
}

export default useIsObserver
