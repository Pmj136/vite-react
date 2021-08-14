import React from 'react'
import Page from '@/components/Page'
import ArticleList from '@/pages/home/ArticleList'
import { Card } from '@material-ui/core'

// import dayjs from 'dayjs'

// console.log(dayjs().format('YYYY-MM-DD'))
function Home() {
    return (
        <Page>
            <Page.Section xs={9}>
                <ArticleList />
            </Page.Section>
            <Page.Section xs={3}>
                <div style={{ position: 'sticky', top: 80 }}>
                    test
                    <Card elevation={0} square>
                        <p>1111</p>
                    </Card>
                </div>
            </Page.Section>
        </Page>
    )
}

export default Home
