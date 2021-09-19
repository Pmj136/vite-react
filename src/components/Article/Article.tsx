import React from 'react'
import { Card } from '@mui/material'
import { IArticle } from '@/types/article'
import Image from '@/components/Image/Image'

interface IProps {
    data: IArticle
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

    const handleClick = (e: any) => {
        e.stopPropagation()
        // history.push("/article/1")
    }
    return (
        <Card
            elevation={0}
            square
            style={{ marginBottom: 16 }}
            onClick={handleClick}
        >
            {/*<img*/}
            {/*    className={classes.img}*/}
            {/*    src="https://oss-cdn.yevpt.com/post/bg-images/202106/245eb60be3b9dadf181b6e98ae7482f6.jpg?a=d66d55bcd04c4d28f529d2a0522289da&b=60d44645"*/}
            {/*/>*/}
            <div>
                作者:{' '}
                <span style={{ color: 'red' }}>{props.data.author.nick}</span>{' '}
            </div>
            <h2 dangerouslySetInnerHTML={{ __html: title }} />
            <div dangerouslySetInnerHTML={{ __html: content }} />
            <div>{props.data.createTime}</div>
            {
                props.data.cover !== '' && (
                    <Image src={props.data.cover} fit="contain" />
                )
                // <img src={props.data.cover} alt="" style={{width:200,backgroundSize:'cover'}}/>
            }
        </Card>
    )
}

export default Article
