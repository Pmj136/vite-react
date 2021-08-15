import { RefObject, useEffect, useRef } from 'react'

interface UseInfiniteScrollProps {
    onScrollToBottom: () => void
}

interface UseInfiniteScrollResult {
    statusRef: RefObject<any>
}

function useInfiniteScroll(
    props: UseInfiniteScrollProps
): UseInfiniteScrollResult {
    const $bottomElRef = useRef()
    const io = new IntersectionObserver(entries => {
        if (entries[0].intersectionRatio <= 0) return
        props.onScrollToBottom()
    })
    useEffect(() => {
        io.observe($bottomElRef.current as unknown as Element)
        return () => {
            io.disconnect()
        }
    }, [])
    return { statusRef: $bottomElRef }
}

export default useInfiniteScroll
