import React, { useEffect, useState } from 'react'
import Page from '@/components/Page'
import { useParams } from 'react-router-dom'
import LeftMenu from './components/LeftMenu'
import Profile from './components/Profile'
import Account from './components/Account'
import { getInfoApi } from '@/api/user'
import type { IUser } from '@/types/user'

import { Card } from '@material-ui/core'
import userStore from '@/store/userStore'

function Setting() {
    const { uId } = userStore
    const params: { component: string } = useParams()
    const [info, setInfo] = useState<IUser>({})
    useEffect(() => {
        getInfoApi(uId).then(res => {
            setInfo(res.data)
        })
    }, [])
    const { component } = params
    return (
        <Page>
            <Page.Section xs={12}>
                <Card elevation={0} square>
                    {/*{component === 'profile' && <Profile data={info} />}*/}
                    {/*{component === 'account' && <Account data={info} />}*/}
                </Card>
            </Page.Section>
        </Page>
    )
}

export default Setting
