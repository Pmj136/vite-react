import request from '@/utils/request'

export function addArticleApi(data: any) {
    return request({
        url: '/article',
        method: 'post',
        data,
    })
}

export function delArticleApi(delId: any) {
    return request({
        url: '/article',
        method: 'delete',
        params: {
            delId,
        },
    })
}

export function updateArticleApi(data: any) {
    return request({
        url: '/article',
        method: 'put',
        data,
    })
}

export function getDetailApi(params: { id: number }) {
    return request({
        url: '/article',
        method: 'get',
        params,
    })
}

export function getArticlesApi(params: {
    page: number
    size?: number
    keyword?: string
}) {
    return request({
        url: '/articles',
        method: 'get',
        params,
    })
}
