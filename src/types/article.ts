export interface IArticle {
    id: number
    cover: string
    title: string
    briefContent: string
    browseCount: number
    commentCount: number
    likeCount: number
    createId?: number
    createTime: string
    tagName: string
    author: {
        id: number
        nick: string
    }
}
