import { useEffect, useReducer } from 'react'
import type { Reducer } from 'react'
import type { AxiosPromise } from 'axios'

type apiType = (p: any) => AxiosPromise

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
    api: apiType,
    apiExtraArgs?: Record<string, unknown>,
    defaultLoadData = true
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
        api({ page, ...apiExtraArgs })
            .then(res => {
                const { records, pages } = res.data
                setState({
                    list: page === 1 ? records : list.concat(...records),
                    hasMore: page < pages,
                })
            })
            .catch(() => {
                setState({
                    hasMore: false,
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
        setState({
            isLoading: true,
        })
        fetchData(currPage + 1)
    }
    const reload = () => {
        setState({
            isLoading: true,
            list: [],
        })
        fetchData(1)
    }
    useEffect(() => {
        if (defaultLoadData) {
            fetchData(1)
        }
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
