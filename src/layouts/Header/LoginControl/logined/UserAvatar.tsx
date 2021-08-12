import React from 'react'
import { Avatar, IconButton } from '@material-ui/core'
import { observer } from 'mobx-react-lite'
import userStore from '@/store/userStore'

function UserAvatar() {
    const { info } = userStore
    return (
        <IconButton>
            <Avatar src={info.avatarUrl} style={{ width: 40, height: 40 }}>
                T
            </Avatar>
        </IconButton>
    )
}

export default observer(UserAvatar)
