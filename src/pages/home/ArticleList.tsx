import React from 'react'
import PagePaper from '@/components/PagePaper/PagePaper'
import Article from '@/components/Article/Article'

interface IProps {
    // children: ReactElement
}

function ArticleList(props: IProps) {
    return (
        <>
            <h3>全部文章</h3>
            {[1, 2, 3, 4, 5, 6, 7, 8].map(v => (
                <Article key={v} data={v} />
            ))}
        </>
    )
}

export default ArticleList
