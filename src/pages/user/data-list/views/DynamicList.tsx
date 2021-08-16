import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getDynamicsApi } from '@/api/user'
import useCacheState from '@/hooks/useCacheState'

function DynamicList() {
    const params = useParams<any>()

    const [currPage, setCurrPage] = useState(1)
    // const [list, setList] = useState([])

    const { data, setCacheData, hasCache } = useCacheState('dynamic', [])
    useEffect(() => {
        if (!hasCache) {
            getDynamicsApi({ page: currPage, userId: params.id }).then(res => {
                setCacheData(res.data.records)
            })
        }
    }, [])
    return <div>dynamic</div>
}

export default DynamicList
