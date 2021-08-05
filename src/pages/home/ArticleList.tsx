import React from 'react'
import PagePaper from '@/components/PagePaper/PagePaper'

interface IProps {
    // children: ReactElement
}

function ArticleList(props: IProps) {
    return (
        <>
            {[1, 2, 3, 4, 5, 6, 7, 8].map(v => (
                <PagePaper key={v}>
                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                </PagePaper>
            ))}
        </>
    )
}

export default ArticleList
