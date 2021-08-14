import React, { useEffect, useState } from 'react'
import Article from '@/components/Article/Article'
import { useLocation } from 'react-router-dom'
import { listApi } from '@/api/article'

interface Item {
    id: number
    cover: null | string
    title: string
    content: string
    browseCount: number
    commentCount: number
    likeCount: number
    createId: number
    createTime: string
    userId: number
    userNick: string
}

function Result() {
    const location = useLocation()
    const [list, setList] = useState([])
    useEffect(() => {
        listApi({ page: 1, keyword: location.state as string }).then(res => {
            setList(res.data.records)
        })
    }, [location.state])
    return (
        <>
            {list.map((v: Item) => (
                <Article
                    key={v.id}
                    data={v}
                    activeStr={location.state as string}
                />
            ))}
        </>
    )
}

export default Result
