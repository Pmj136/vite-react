import { useEffect, useState } from 'react'

interface ISWRResult<T> {
    data: T
    isLoading: boolean
    isError: boolean
}

export function useSWR<T>(api: () => Promise<any>, initData: T): ISWRResult<T> {
    const [data, setData] = useState<T>(initData)
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
