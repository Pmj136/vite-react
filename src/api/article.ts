import request from '@/utils/request'
import { ContentType } from '@/utils/constants'

export function addArticleApi(data: any) {
    return request({
        url: '/article',
        method: 'post',
        data,
    })
}

export function delArticleApi(delId: any) {
    return request({
        url: '/article',
        method: 'delete',
        params: {
            delId,
        },
    })
}

export function updateArticleApi(data: any) {
    return request({
        url: '/article',
        method: 'put',
        data,
    })
}

export function getDetailApi(params: { id: number }) {
    return request({
        url: '/article',
        method: 'get',
        params,
    })
}

export function getArticlesApi(params: {
    page: number
    size?: number
    keyword?: string
}) {
    return request({
        url: '/articles',
        method: 'get',
        params,
    })
}

export function uploadFileApi(dir: string, file: File) {
    const formData = new FormData()
    formData.append('dir', dir)
    formData.append('file', file)
    return request({
        url: '/file/upload',
        method: 'post',
        headers: {
            'Content-Type': ContentType.FORM_DATA,
        },
        data: formData,
    })
}
