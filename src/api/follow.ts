import request from '@/utils/request'

export function doFollowApi(data: { targetId: number }) {
    return request({
        url: '/follow',
        method: 'post',
        data,
    })
}

export function undoFollowApi(delId: number) {
    return request({
        url: '/follow',
        method: 'delete',
        params: {
            delId,
        },
    })
}
