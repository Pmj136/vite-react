import React from 'react'
import Page from '@/components/Page'
import { Paper } from '@material-ui/core'
import Profile from './profile/Profile'
import DataList from './data-list/DataList'

function User() {
    return (
        <Page>
            <Page.Section xs={9}>
                <Paper elevation={0}>
                    <Profile />
                </Paper>
                <Paper elevation={0} style={{ marginTop: 16 }}>
                    <DataList />
                </Paper>
            </Page.Section>
            <Page.Section xs={3}>
                <Paper elevation={0}>extra</Paper>
            </Page.Section>
        </Page>
    )
}

export default User
