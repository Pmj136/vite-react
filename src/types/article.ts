export interface IArticle {
    id: number
    cover: null | string
    title: string
    content: string
    browseCount: number
    commentCount: number
    likeCount: number
    createId: number
    createTime: string
    userId: number
    userNick: string
}
