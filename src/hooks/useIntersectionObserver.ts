import { RefObject, useEffect } from 'react'

interface IUserIsObserver {
    onShow: (callback: () => void) => void
    onHide: (callback: () => void) => void
}

function useIntersectionObserver(ref: RefObject<HTMLElement>): IUserIsObserver {
    const fnMap: { [key: string]: () => void } = {}
    const onShow = (callback: () => void) => {
        fnMap['onShow'] = callback
    }
    const onHide = (callback: () => void) => {
        fnMap['onHide'] = callback
    }
    const io = new IntersectionObserver(entries => {
        if (entries[0].intersectionRatio === 0) {
            fnMap['onHide'] && fnMap['onHide']()
            return
        }
        fnMap['onShow'] && fnMap['onShow']()
    })
    useEffect(() => {
        io.observe(ref.current as HTMLElement)
        return () => {
            io.disconnect()
        }
    }, [])
    return { onShow, onHide }
}

export default useIntersectionObserver
