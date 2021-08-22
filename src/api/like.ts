import request from '@/utils/request'

export function doLikeApi(data: { articleId: number }) {
    return request({
        url: '/like',
        method: 'post',
        data,
    })
}

export function undoLikeApi(delId: number) {
    return request({
        url: '/like',
        method: 'delete',
        params: {
            delId,
        },
    })
}
