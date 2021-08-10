import React from 'react'
import PageContainer from '@/components/PageContainer/PageContainer'
import HomeCarousel from '@/pages/home/Carousel'
import ArticleList from '@/pages/home/ArticleList'
import CommonPaper from '@/components/CommonPaper/CommonPaper'
// import dayjs from 'dayjs'

// console.log(dayjs().format('YYYY-MM-DD'))
function Home() {
    return (
        <PageContainer
            right={
                <>
                    <CommonPaper>
                        <p>1</p>
                        <p>1</p>
                        <p>1</p>
                        <p>1</p>
                        <p>1</p>
                        <p>1</p>
                        <p>1</p>
                        <p>1</p>
                    </CommonPaper>
                    <CommonPaper>
                        <p>1</p>
                        <p>1</p>
                        <p>1</p>
                        <p>1</p>
                        <p>1</p>
                    </CommonPaper>
                    <CommonPaper>
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
                    </CommonPaper>
                </>
            }
        >
            {/*<HomeCarousel />*/}
            <ArticleList />
        </PageContainer>
    )
}

export default Home
