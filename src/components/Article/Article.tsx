import React from 'react'
import CommonPaper from '../CommonPaper/CommonPaper'
import classes from './article.module.css'

interface IProps {
    data: any
    activeStr?: string
}

function replaceHtml(raw: string, activeStr?: string) {
    if (activeStr === undefined) return raw
    const arrStr = activeStr.split('')
    for (const v of arrStr) {
        const regExp = new RegExp(v, 'gi')
        raw = raw.replace(regExp, `<span style="color:red">${v}</span>`)
    }
    return raw
}

function Article(props: IProps) {
    const title = replaceHtml(props.data.title, props.activeStr)
    const content = replaceHtml(props.data.content, props.activeStr)
    return (
        <CommonPaper>
            {/*<img*/}
            {/*    className={classes.img}*/}
            {/*    src="https://oss-cdn.yevpt.com/post/bg-images/202106/245eb60be3b9dadf181b6e98ae7482f6.jpg?a=d66d55bcd04c4d28f529d2a0522289da&b=60d44645"*/}
            {/*/>*/}
            <h2 dangerouslySetInnerHTML={{ __html: title }} />
            <div dangerouslySetInnerHTML={{ __html: content }} />
            <div>{props.data.createTime}</div>
        </CommonPaper>
    )
}

export default Article
