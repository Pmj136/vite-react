import { useEffect, useReducer } from 'react'
import type { Reducer } from 'react'
import type { AxiosPromise } from 'axios'

type apiType = (p: any) => AxiosPromise

interface IUserLazyFetchProps {
    api: apiType
    extraArgs?: any
    initData?: boolean | undefined
}

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
    args: IUserLazyFetchProps | apiType
): IUseLazyFetchResult<T> {
    let api: apiType,
        extraArgs = {},
        initData = true
    if (typeof args === 'function') {
        api = args
    }
    if (typeof args === 'object') {
        api = args.api
        extraArgs = args.extraArgs
        initData = args.initData === undefined ? true : args.initData
    }

    const [{ currPage, list, isLoading, hasMore }, setState] = useReducer<
        Reducer<IState<T>, any>
    >((state, data) => ({ ...state, ...data }), {
        currPage: 1,
        list: [],
        isLoading: true,
        hasMore: true,
    })
    const fetchData = (page: number) => {
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
        if (initData) {
            setState({
                isLoading: true,
            })
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
