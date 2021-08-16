import React, { ReactElement, ReactNode } from 'react'
import Observer from './Observer'

interface IProps {
    isLoading: boolean
    hasData: boolean
    hasMore: boolean
    noDataEl: ReactElement
    loadingEl: ReactElement
    noMoreEl: ReactElement
    children: ReactNode
    onLoadMore: () => void
}

function ScrollWrap(props: IProps) {
    const isRenderObserver = !props.isLoading && props.hasMore,
        isRenderLoadingEl = props.isLoading || props.hasMore,
        isRenderNoDataEl = !props.isLoading && !props.hasData,
        isRenderNoMoreEl = !props.isLoading && !props.hasMore && props.hasData
    return (
        <>
            {props.children}
            {isRenderObserver && <Observer onShow={props.onLoadMore} />}
            {isRenderLoadingEl && props.loadingEl}
            {isRenderNoDataEl && props.noDataEl}
            {isRenderNoMoreEl && props.noMoreEl}
        </>
    )
}

export default ScrollWrap
