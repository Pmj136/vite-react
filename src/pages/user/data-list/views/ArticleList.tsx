import React from 'react'
import Article from '@/components/Article/Article'
import { getCollectionsApi, getCreationsApi } from '@/api/user'
import { useParams } from 'react-router-dom'
import { InfiniteScroll, useLazyFetch } from '@/components/InfiniteScroll'
import NoData from '@/components/NoData/NoData'
import NoMore from '@/components/NoMore/NoMore'
import ArticleSkeleton from '@/components/LoadingSkeleton/ArticleSkeleton'
import type { IUser } from '@/types/user'

interface IProps {
    type: 'creation' | 'collection'
}

const apis = {
    creation: getCreationsApi,
    collection: getCollectionsApi,
}

function ArticleList(props: IProps) {
    const params = useParams<any>()
    const { isLoading, list, hasMore, loadMore } = useLazyFetch<IUser>(
        apis[props.type],
        { userId: params.id, size: 4 }
    )
    return (
        <InfiniteScroll
            isLoading={isLoading}
            hasData={list.length > 0}
            hasMore={hasMore}
            loadingEl={<ArticleSkeleton />}
            noDataEl={<NoData />}
            noMoreEl={<NoMore />}
            onLoadMore={loadMore}
        >
            {list.map(v => (
                <Article key={v.id} data={v} />
            ))}
        </InfiniteScroll>
    )
}

export default ArticleList
