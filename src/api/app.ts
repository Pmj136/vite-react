import request from '@/utils/request'

export function authApi() {
    return request({
        url: '/app/auth',
        method: 'get',
    })
}
