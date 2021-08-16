import { useEffect, useReducer } from 'react'
import type { Reducer } from 'react'
import type { AxiosPromise } from 'axios'

interface IUseLazyFetchResult<T> {
    items: T[]
    isLoading: boolean
    hasMore: boolean
    loadMore: () => void
}

interface IState<T> {
    currPage: number
    items: T[]
    isLoading: boolean
    hasMore: boolean
}

function useLazyFetch<T>(
    api: (p: any) => AxiosPromise,
    extraArgs?: any
): IUseLazyFetchResult<T> {
    const [{ currPage, items, isLoading, hasMore }, setState] = useReducer<
        Reducer<IState<T>, any>
    >((state, data) => ({ ...state, ...data }), {
        currPage: 1,
        items: [],
        isLoading: true,
        hasMore: true,
    })
    const loadMore = () => {
        setState({
            currPage: currPage + 1,
            isLoading: true,
        })
    }
    const loadData = () => {
        api({ page: currPage, ...extraArgs })
            .then(res => {
                const { records, pages } = res.data
                setState({
                    items: items.concat(...records),
                    hasMore: currPage < pages,
                })
            })
            .finally(() => {
                setState({
                    isLoading: false,
                })
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
