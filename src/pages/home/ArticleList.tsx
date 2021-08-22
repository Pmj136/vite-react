import React from 'react'
import Article from '@/components/Article/Article'
import { Typography } from '@material-ui/core'
import { getArticlesApi } from '@/api/article'
import { InfiniteScroll, useLazyFetch } from '@/components/InfiniteScroll'
import ArticleSkeleton from '@/components/LoadingSkeleton/ArticleSkeleton'
import NoData from '@/components/NoData/NoData'
import NoMore from '@/components/NoMore/NoMore'
import type { IArticle } from '@/types/article'

function ArticleList() {
    const { isLoading, list, hasMore, loadMore } =
        useLazyFetch<IArticle>(getArticlesApi)
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
            <Typography component="div" color="textPrimary">
                全部文章
            </Typography>
            {list.map(v => (
                <Article key={v.id} data={v} />
            ))}
        </InfiniteScroll>
    )
}

export default ArticleList
