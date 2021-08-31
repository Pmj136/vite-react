import request from '@/utils/request'

export function addTagApi(data: any) {
    return request({
        url: '/tag',
        method: 'post',
        data,
    })
}

export function getTagsApi(keyword: string) {
    return request({
        url: '/tags',
        method: 'get',
        params: {
            keyword,
        },
    })
}
