import { useEffect, useState } from 'react'
import type { AxiosPromise } from 'axios'

interface IUseLazyFetchResult<T> {
    items: T[]
    isLoading: boolean
    hasMore: boolean
    loadMore: () => void
}

function useLazyFetch<T>(
    api: (p: any) => AxiosPromise,
    extraArgs: any
): IUseLazyFetchResult<T> {
    const [currPage, setCurPage] = useState(1)
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [hasMore, setHasMore] = useState(true)
    const loadMore = () => {
        setCurPage(currPage + 1)
        setIsLoading(true)
    }
    const loadData = () => {
        api({ page: currPage, ...extraArgs })
            .then(res => {
                const { records, pages } = res.data
                setItems(arr => {
                    return arr.concat(...records)
                })
                setHasMore(currPage < pages)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    useEffect(() => {
        loadData()
    }, [currPage])
    return {
        items,
        isLoading,
        hasMore,
        loadMore,
    }
}

export default useLazyFetch
