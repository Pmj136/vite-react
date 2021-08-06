import React from 'react'
import { IconButton, Badge } from '@material-ui/core'
import { NotificationsNone as NotificationIcon } from '@material-ui/icons'
import userStore from '@/store/userStore'
import { observer } from 'mobx-react-lite'

function NotificationLink() {
    const { isLogin } = userStore
    if (!isLogin) return null
    return (
        <IconButton>
            <Badge variant="dot" color="secondary">
                <NotificationIcon color="action" />
            </Badge>
        </IconButton>
    )
}

export default observer(NotificationLink)
