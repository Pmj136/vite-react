import React, { useEffect } from 'react'
import Article from '@/components/Article/Article'
import { useLocation } from 'react-router-dom'
import { getArticlesApi } from '@/api/article'
import { InfiniteScroll, useLazyFetch } from '@/components/InfiniteScroll'
import ArticleSkeleton from '@/components/LoadingSkeleton/ArticleSkeleton'
import NoData from '@/components/NoData/NoData'
import NoMore from '@/components/NoMore/NoMore'
import type { IArticle } from '@/types/article'

function Result() {
    const location = useLocation()
    const { isLoading, list, hasMore, loadMore, reload } =
        useLazyFetch<IArticle>(
            getArticlesApi,
            { keyword: location.state },
            false
        )
    useEffect(() => {
        reload()
    }, [location.state])
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
                <Article
                    key={v.id}
                    data={v}
                    activeStr={location.state as string}
                />
            ))}
        </InfiniteScroll>
    )
}

export default Result
