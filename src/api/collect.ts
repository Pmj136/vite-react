import request from '@/utils/request'

export function doCollectApi(data: { articleId: number }) {
    return request({
        url: '/collect',
        method: 'post',
        data,
    })
}

export function undoCollectApi(delId: number) {
    return request({
        url: '/collect',
        method: 'delete',
        params: {
            delId,
        },
    })
}
