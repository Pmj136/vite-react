import React, { useEffect, useState } from 'react'
import Article from '@/components/Article/Article'
import { Typography } from '@material-ui/core'
import { listApi } from '@/api/article'

interface IProps {
    // children: ReactElement
}

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

function ArticleList(props: IProps) {
    const [currPage, setCurrPage] = useState(1)
    const [list, setList] = useState([])
    useEffect(() => {
        listApi({ page: currPage }).then(res => {
            setList(res.data.records)
        })
    }, [])
    return (
        <>
            <Typography component="div" color="textPrimary">
                全部文章
            </Typography>
            {list.map((v: Item) => (
                <Article key={v.id} data={v} />
            ))}
        </>
    )
}

export default ArticleList
