import request from '@/utils/request'
import { ContentType } from '@/utils/constants'
import { stringify } from 'qs'

export function doFollowApi(data: { targetId: number }) {
    return request({
        url: '/user/follow',
        method: 'post',
        headers: {
            'Content-Type': ContentType.FORM_URLENCODED,
        },
        data: stringify(data),
    })
}

export function undoFollowApi(data: { targetId: number }) {
    return request({
        url: '/user/follow',
        method: 'delete',
        headers: {
            'Content-Type': ContentType.FORM_URLENCODED,
        },
        data: stringify(data),
    })
}
