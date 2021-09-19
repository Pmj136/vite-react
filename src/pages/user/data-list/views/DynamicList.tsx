import React from 'react'
import { InfiniteScroll, useLazyFetch } from '@/components/InfiniteScroll'
import { getDynamicsApi } from '@/api/user'
import { useParams } from 'react-router-dom'
import ArticleSkeleton from '@/components/LoadingSkeleton/ArticleSkeleton'
import NoData from '@/components/NoData/NoData'
import NoMore from '@/components/NoMore/NoMore'
import Article from '@/components/Article/Article'
import { IArticle } from '@/types/article'
import { Card } from '@mui/material'

interface IData {
    id: number
    type: number //1 发布；2点赞；3收藏；4评论
    createTime: number
    article: IArticle
    user: {
        id: number
        nick: string
    }
}

function type2Str(type: number) {
    switch (type) {
        case 1:
            return '发布了新文章'
        case 2:
            return '赞了这篇文章'
        case 3:
            return '收藏了这篇文章'
        case 4:
            return '评论了这篇文章'
    }
}

function DynamicList() {
    const params = useParams<any>()
    const { isLoading, list, hasMore, loadMore } = useLazyFetch<IData>(
        getDynamicsApi,
        { userId: params.id }
    )
    return (
        <InfiniteScroll
            isLoading={isLoading}
            hasData={list.length > 0}
            hasMore={hasMore}
            loadingEl={ArticleSkeleton}
            noDataEl={NoData}
            noMoreEl={NoMore}
            onScrollToBottom={loadMore}
        >
            {list.map(v => (
                <div key={v.id}>
                    <Card square elevation={0}>
                        <h3>
                            {v.user.nick} {type2Str(v.type)}
                        </h3>
                    </Card>
                    <Article data={v.article} />
                </div>
            ))}
        </InfiniteScroll>
    )
}

export default DynamicList
