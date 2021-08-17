import { useEffect, useState } from 'react'
import type { AxiosPromise } from 'axios'

type Api = () => Promise<any> | AxiosPromise

interface IUseFetchResult<T> {
    data: T
    isLoading: boolean
    isError: boolean
}

function useFetch<T>(api: Api, initialState: T): IUseFetchResult<T> {
    const [data, setData] = useState<T>(initialState)
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    useEffect(() => {
        api()
            .then(res => {
                if (res.data != null) setData(res.data)
                else setIsError(true)
            })
            .catch(() => {
                setIsError(true)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, [])
    return { data, isLoading, isError }
}

export default useFetch
