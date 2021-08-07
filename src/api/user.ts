import request from '@/utils/request'
import { ContentType } from '@/utils/constants'
import { stringify } from 'qs'

export function loginApi(data: any) {
    return request({
        url: '/user/login',
        method: 'post',
        headers: {
            'Content-Type': ContentType.JSON,
        },
        data,
    })
}

export function testApi(data: { email: string; code: string }) {
    return request({
        url: '/user/login',
        method: 'post',
        headers: {
            'Content-Type': ContentType.FORM_URLENCODED,
        },
        data: stringify(data),
    })
}
