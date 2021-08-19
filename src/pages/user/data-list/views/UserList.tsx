import React from 'react'
import { useParams } from 'react-router-dom'
import { getFansApi, getFollowApi } from '@/api/user'
import { InfiniteScroll, useLazyFetch } from '@/components/InfiniteScroll'
import ArticleSkeleton from '@/components/LoadingSkeleton/ArticleSkeleton'
import NoData from '@/components/NoData/NoData'
import NoMore from '@/components/NoMore/NoMore'
import type { IUser } from '@/types/user'

interface IProps {
    type: 'follow' | 'fans'
}

const apis = {
    follow: getFollowApi,
    fans: getFansApi,
}

function UserList(props: IProps) {
    const params = useParams<any>()
    const { isLoading, list, hasMore, loadMore } = useLazyFetch<IUser>(
        apis[props.type],
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
                <div key={v.id}>{v.id}</div>
            ))}
        </InfiniteScroll>
    )
}

export default UserList
