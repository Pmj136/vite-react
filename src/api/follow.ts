import request from '@/utils/request'
import { ContentType } from '@/utils/constants'
import { stringify } from 'qs'

export function doFollowApi(data: { targetId: number }) {
    return request({
        url: '/follow/do',
        method: 'post',
        headers: {
            'Content-Type': ContentType.FORM_URLENCODED,
        },
        data: stringify(data),
    })
}

export function undoFollowApi(data: { targetId: number }) {
    return request({
        url: '/follow/undo',
        method: 'delete',
        headers: {
            'Content-Type': ContentType.FORM_URLENCODED,
        },
        data: stringify(data),
    })
}
