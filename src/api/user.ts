import request from '@/utils/request'
import { ContentType } from '@/utils/constants'
import { IUser } from '@/types/user'

//全局授权检测
export function authApi(rl?: boolean) {
    return request({
        url: '/user/auth',
        method: 'get',
        params: {
            rl,
        },
    })
}

//发送验证码
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

export function verifyCodeApi(email: string, code: string) {
    return request({
        url: '/user/verifyCode',
        method: 'get',
        headers: {
            'Content-Type': ContentType.FORM_URLENCODED,
        },
        params: {
            email,
            code,
        },
    })
}

export function updatePwdApi(newPwd: string) {
    return request({
        url: '/user/password',
        method: 'put',
        data: {
            password: newPwd,
        },
    })
}

//登录
export function loginApi({ type, email, code, password }: any) {
    const params = { type, email, credential: code || password }
    return request({
        url: '/user/login',
        method: 'post',
        data: params,
    })
}

//退出
export function logoutApi() {
    return request({
        url: '/user/logout',
        method: 'post',
    })
}

//获取用户信息
export function getProfileApi() {
    return request({
        url: '/user/settings',
        method: 'get',
    })
}

//更新用户信息
export function updateProfileApi(data: IUser) {
    return request({
        url: '/user/settings',
        method: 'put',
        data,
    })
}

export function uploadAvatar(avatar: File) {
    const formData = new FormData()
    formData.append('avatar', avatar)
    return request({
        url: '/user/avatar',
        method: 'put',
        headers: {
            'Content-Type': ContentType.FORM_DATA,
        },
        data: formData,
    })
}

//获取用户信息
export function getUserInfoApi(id?: number) {
    return request({
        url: '/user',
        method: 'get',
        params: {
            id,
        },
    })
}

//获取动态
export function getDynamicsApi(params: {
    page: number
    size?: number
    userId?: number
}) {
    return request({
        url: '/user/dynamics',
        method: 'get',
        params,
    })
}

//获取创作
export function getCreationsApi(params: {
    page: number
    size?: number
    userId?: number
}) {
    return request({
        url: '/user/creations',
        method: 'get',
        params,
    })
}

//获取收藏
export function getCollectionsApi(params: {
    page: number
    size?: number
    userId?: number
}) {
    return request({
        url: '/user/collections',
        method: 'get',
        params,
    })
}

//获取关注
export function getFollowApi(params: {
    page: number
    size?: number
    userId?: number
}) {
    return request({
        url: '/user/follows',
        method: 'get',
        params,
    })
}

//获取粉丝
export function getFansApi(params: {
    page: number
    size?: number
    userId?: number
}) {
    return request({
        url: '/user/fans',
        method: 'get',
        params,
    })
}
