import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { listApi } from '@/api/article'

function Search() {
    const location = useLocation()
    useEffect(() => {
        listApi({ keyword: location.state as string, page: 1 })
    }, [location.state])
    return <div>搜索</div>
}

export default Search
