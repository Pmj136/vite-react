import request from '@/utils/request'
import { ContentType } from '@/utils/constants'
import { stringify } from 'qs'

export function sendCodeApi(email: string) {
    return request({
        url: '/user/sendCode',
        method: 'post',
        headers: {
            'Content-Type': ContentType.FORM_URLENCODED,
        },
        data: stringify({
            email,
        }),
    })
}

export function loginApi({ type, email, code, password }: any) {
    const params = { type, email, credential: code || password }
    return request({
        url: '/user/login',
        method: 'post',
        data: params,
    })
}

// export function testApi(data: { email: string; code: string }) {
//     return request({
//         url: '/user/login',
//         method: 'post',
//         headers: {
//             'Content-Type': ContentType.FORM_URLENCODED,
//         },
//         data: stringify(data),
//     })
// }
