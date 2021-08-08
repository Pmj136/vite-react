import React from 'react'
import Article from '@/components/Article/Article'
import { Typography } from '@material-ui/core'

interface IProps {
    // children: ReactElement
}

function ArticleList(props: IProps) {
    return (
        <>
            <Typography component="div" color="textPrimary">
                全部文章
            </Typography>
            {[1, 2, 3, 4, 5, 6, 7, 8].map(v => (
                <Article key={v} data={v} />
            ))}
        </>
    )
}

export default ArticleList
