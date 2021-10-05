import { useEffect, useRef } from 'react'

function useDebounce(fn: (...args: any) => void, delay = 200) {
    const { current } = useRef<{ fn: () => void; timer: undefined | number }>({
        fn,
        timer: undefined,
    })
    useEffect(() => {
        return () => {
            clearTimeout(current.timer)
        }
    }, [])
    return function (...args: any) {
        clearTimeout(current.timer)
        current.timer = setTimeout(() => {
            fn(...args)
        }, delay)
    }
}

export default useDebounce
