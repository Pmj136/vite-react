import { useEffect } from 'react'

function useScrollWatcher(el: string) {
    let before_scrollTop = 0
    const eventMap: { [key: string]: () => void } = {}
    const onTrendingUp = (callback: () => void) => {
        eventMap['onTrendingUp'] = callback
    }
    const onTrendingDown = (callback: () => void) => {
        eventMap['onTrendingDown'] = callback
    }

    useEffect(() => {
        document.onscroll = () => {
            // if (timer) clearTimeout(timer)
            // timer = setTimeout(() => {
            const scrollTop = document.documentElement.scrollTop
            const diff = scrollTop - before_scrollTop
            if (diff > 0) {
                console.log('down')
            } else {
                console.log('up')
            }
            before_scrollTop = scrollTop
            // }, 200)
        }
        return () => {
            document.onscroll = null
        }
    })
    return {
        onTrendingDown,
        onTrendingUp,
    }
}

export default useScrollWatcher
