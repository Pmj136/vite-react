import { useEffect, useState } from 'react'

interface ICache<T> {
    [key: string]: T
}

const cache: ICache<any> = {}
export default function useCacheState<T>(cacheKey: string, initData: any) {
    const [data, setData] = useState<T>(cache[cacheKey] || initData)
    const cacheData = cache[cacheKey]
    const hasCache = cacheData !== undefined
    const setCacheData = (d: T) => {
        setData(d)
        cache[cacheKey] = d
    }
    useEffect(() => {
        if (hasCache) {
            setData(cacheData)
        }
    }, [cacheKey])

    return { data, setCacheData, hasCache }
}
