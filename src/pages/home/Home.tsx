import React from 'react'
import { JPage, JPageSection } from '@/components/JPage'
import ArticleList from '@/pages/home/ArticleList'
import { Card, styled } from '@material-ui/core'

// import dayjs from 'dayjs'

// console.log(dayjs().format('YYYY-MM-DD'))
const MyDiv = styled('div')({
    cursor: 'pointer',
})

function Home() {
    console.log('render')
    // const styles=useStyles()
    return (
        <JPage>
            <JPageSection xs={9}>
                <ArticleList />
            </JPageSection>
            <JPageSection xs={3}>
                <MyDiv>
                    test
                    <Card elevation={0} square>
                        <p>1111</p>
                    </Card>
                </MyDiv>
            </JPageSection>
        </JPage>
    )
}

export default Home
