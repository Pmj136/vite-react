import React from 'react'
import PageContainer from '@/components/PageContainer/PageContainer'
import HomeCarousel from '@/pages/home/Carousel'
import ArticleList from '@/pages/home/ArticleList'
import PagePaper from '@/components/PagePaper/PagePaper'
// import dayjs from 'dayjs'

// console.log(dayjs().format('YYYY-MM-DD'))
function Home() {
    return (
        <PageContainer
            right={
                <>
                    <PagePaper>
                        <p>1</p>
                        <p>1</p>
                        <p>1</p>
                        <p>1</p>
                        <p>1</p>
                    </PagePaper>
                    <PagePaper>
                        <p>1</p>
                        <p>1</p>
                        <p>1</p>
                        <p>1</p>
                        <p>1</p>
                    </PagePaper>
                    <PagePaper>
                        <p>1</p>
                        <p>1</p>
                        <p>1</p>
                        <p>1</p>
                        <p>1</p>
                        <p>1</p>
                        <p>1</p>
                        <p>1</p>
                        <p>1</p>
                        <p>1</p>
                    </PagePaper>
                </>
            }
        >
            <HomeCarousel />
            <ArticleList />
        </PageContainer>
    )
}

export default Home
