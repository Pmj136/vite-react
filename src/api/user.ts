import request from '@/utils/request'
import { ContentType } from '@/utils/constants'

export function authApi() {
    return request({
        url: '/user/auth',
        method: 'get',
    })
}

export function sendCodeApi(email: string) {
    return request({
        url: '/user/sendCode',
        method: 'get',
        headers: {
            'Content-Type': ContentType.FORM_URLENCODED,
        },
        params: {
            email,
        },
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

export function logoutApi() {
    return request({
        url: '/user/logout',
        method: 'post',
    })
}

export function getInfoApi(id: number) {
    return request({
        url: '/user',
        method: 'get',
        params: {
            id,
        },
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
