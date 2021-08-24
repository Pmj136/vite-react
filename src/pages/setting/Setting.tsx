import React from 'react'
import { JPage, JPageSection } from '@/components/JPage'
import { useParams } from 'react-router-dom'
import LeftMenu from './LeftMenu'
import Loading from '@/components/Loading'
import Profile from './profile/Profile'
import Account from './account/Account'
import { getProfileApi } from '@/api/user'

import { Card } from '@material-ui/core'
import useFetch from '@/hooks/useFetch'
import type { IUser } from '@/types/user'

function Setting() {
    const params: { component: string } = useParams()
    const { data, isLoading } = useFetch<IUser>(getProfileApi, {})
    const profileData = {
        avatarUrl: data.avatarUrl as string,
        nick: data.nick as string,
        gender: data.gender as number,
        address: data.address as string,
        intro: data.intro as string,
    }
    const accountData = {
        email: data.email as string,
        githubId: data.githubId as number,
        githubNick: data.githubNick as string,
        qqId: data.qqId as string,
        qqNick: data.qqNick as string,
        giteeId: data.giteeId as number,
        giteeNick: data.giteeNick as string,
        isSetPassword: data.isSetPassword as boolean,
    }
    return (
        <JPage>
            <JPageSection xs={2.5} style={{ position: 'sticky', top: 80 }}>
                <Card elevation={0} square>
                    <LeftMenu currComponent={params.component} />
                </Card>
            </JPageSection>
            <JPageSection xs={9.5}>
                {isLoading ? (
                    <Loading />
                ) : (
                    <Card elevation={0} square>
                        <section hidden={params.component !== 'profile'}>
                            <Profile data={profileData} />
                        </section>
                        <section hidden={params.component !== 'account'}>
                            <Account data={accountData} />
                        </section>
                    </Card>
                )}
            </JPageSection>
        </JPage>
    )
}

export default Setting
