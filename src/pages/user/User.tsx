import React from 'react'
import Page from '@/components/Page'
import { useParams } from 'react-router-dom'
import { Paper } from '@material-ui/core'

import Info from './UserInfo/Info'
import DetailList from './DetailList/DetailList'

function User() {
    const params = useParams<any>()
    return (
        <Page>
            <Page.Section xs={9}>
                <Paper elevation={0}>
                    <Info id={params.id} />
                </Paper>
                <Paper elevation={0} style={{ marginTop: 16 }}>
                    <DetailList />
                </Paper>
            </Page.Section>
            <Page.Section xs={3}>
                <Paper elevation={0}>extra</Paper>
            </Page.Section>
        </Page>
    )
}

export default User
