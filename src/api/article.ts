import request from '@/utils/request'

export function addArticleApi(data: any) {
    return request({
        url: '/article',
        method: 'post',
        data,
    })
}

export function delArticleApi(id: any) {
    return request({
        url: '/article',
        method: 'delete',
        params: {
            id,
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

export function listApi(params: {
    keyword?: string
    page: number
    size?: number
}) {
    return request({
        url: '/articles',
        method: 'get',
        params,
    })
}
