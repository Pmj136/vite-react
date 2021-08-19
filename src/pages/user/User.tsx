import React from 'react'
import { JPage, JPageSection } from '@/components/JPage'
import { Card } from '@material-ui/core'
import Profile from './profile/Profile'
import DataList from './data-list/DataList'
import Right from './right'

function User() {
    return (
        <JPage>
            <JPageSection xs={9}>
                <Card elevation={0}>
                    <Profile />
                </Card>
                <Card elevation={0} style={{ marginTop: 16 }}>
                    <DataList />
                </Card>
            </JPageSection>
            <JPageSection xs={3}>
                <Right />
            </JPageSection>
        </JPage>
    )
}

export default User
