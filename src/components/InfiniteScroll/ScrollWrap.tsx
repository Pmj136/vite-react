import React, { createElement, FC, ReactNode } from 'react'
import Observer from './Observer'

interface IProps {
    isLoading: boolean
    hasData: boolean
    hasMore: boolean
    loadingEl: FC<{ show: boolean }>
    noDataEl: FC<{ show: boolean }>
    noMoreEl: FC<{ show: boolean }>
    children: ReactNode
    onScrollToBottom: () => void
}

function ScrollWrap(props: IProps) {
    const isRenderObserver = !props.isLoading && props.hasMore,
        isRenderLoadingEl = props.isLoading || props.hasMore,
        isRenderNoDataEl = !props.isLoading && !props.hasData,
        isRenderNoMoreEl = !props.isLoading && !props.hasMore && props.hasData
    return (
        <>
            {props.children}
            {isRenderObserver && <Observer onShow={props.onScrollToBottom} />}
            {createElement(props.loadingEl, {
                show: isRenderLoadingEl,
            })}
            {createElement(props.noDataEl, {
                show: isRenderNoDataEl,
            })}
            {createElement(props.noMoreEl, {
                show: isRenderNoMoreEl,
            })}
        </>
    )
}

export default ScrollWrap
