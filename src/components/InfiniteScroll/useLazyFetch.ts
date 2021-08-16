import { useEffect, useReducer } from 'react'
import type { Reducer } from 'react'
import type { AxiosPromise } from 'axios'

interface IUseLazyFetchResult<T> {
    list: T[]
    isLoading: boolean
    hasMore: boolean
    loadMore: () => void
    reload: () => void
}

interface IState<T> {
    currPage: number
    list: T[]
    isLoading: boolean
    hasMore: boolean
}

function useLazyFetch<T>(
    api: (p: any) => AxiosPromise,
    extraArgs?: any
): IUseLazyFetchResult<T> {
    const [{ currPage, list, isLoading, hasMore }, setState] = useReducer<
        Reducer<IState<T>, any>
    >((state, data) => ({ ...state, ...data }), {
        currPage: 1,
        list: [],
        isLoading: true,
        hasMore: true,
    })
    const fetchData = (page: number) => {
        setState({
            isLoading: true,
        })
        api({ page, ...extraArgs })
            .then(res => {
                const { records, pages } = res.data
                setState({
                    list: page === 1 ? records : list.concat(...records),
                    hasMore: page < pages,
                })
            })
            .finally(() => {
                setState({
                    isLoading: false,
                    currPage: page,
                })
            })
    }
    const loadMore = () => {
        fetchData(currPage + 1)
    }
    const reload = () => {
        fetchData(1)
    }
    useEffect(() => {
        fetchData(1)
    }, [])
    return {
        list,
        isLoading,
        hasMore,
        loadMore,
        reload,
    }
}

export default useLazyFetch
