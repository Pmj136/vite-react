export interface IArticle {
    id: number
    cover: string
    title: string
    content: string
    browseCount: number
    commentCount: number
    likeCount: number
    createId?: number
    createTime: string
    author: {
        id: number
        nick: string
    }
}
