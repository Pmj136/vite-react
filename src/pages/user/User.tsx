import React from 'react'
import { JPage, JPageSection } from '@/components/JPage'
import { Card } from '@material-ui/core'
import Profile from './profile/Profile'
import DataList from './data-list/DataList'
import useFetch from '@/hooks/useFetch'
import { getUserInfoApi } from '@/api/user'
import { useParams } from 'react-router-dom'
import Merit from './right/Merit'
import Relation from './right/Relation'

type ajaxData = { profile?: any; merit?: any; relation?: any }

function User() {
    const params = useParams<any>()
    const { data } = useFetch<ajaxData>(() => getUserInfoApi(params.id), {})
    return (
        <JPage>
            <JPageSection xs={9}>
                <Card elevation={0}>
                    <Profile data={data.profile} />
                </Card>
                <Card elevation={0} style={{ marginTop: 16 }}>
                    <DataList />
                </Card>
            </JPageSection>
            <JPageSection xs={3}>
                <Merit data={data.merit} />
                <Relation data={data.relation} />
            </JPageSection>
        </JPage>
    )
}

export default User
