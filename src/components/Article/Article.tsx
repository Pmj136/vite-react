import React from 'react'
import CommonPaper from '../CommonPaper/CommonPaper'
import classes from './article.module.css'

interface IProps {
    data: any
}

function Article(props: IProps) {
    return (
        <CommonPaper>
            <img
                className={classes.img}
                src="https://oss-cdn.yevpt.com/post/bg-images/202106/245eb60be3b9dadf181b6e98ae7482f6.jpg?a=d66d55bcd04c4d28f529d2a0522289da&b=60d44645"
            />
        </CommonPaper>
    )
}

export default Article
