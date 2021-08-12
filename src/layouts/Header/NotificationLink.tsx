import React, { useState } from 'react'
import { IconButton, Badge } from '@material-ui/core'
import { NotificationsNone as NotificationIcon } from '@material-ui/icons'
import userStore from '@/store/userStore'
import { observer } from 'mobx-react-lite'
import ButtonLink from '@/components/ButtonLink'

function NotificationLink() {
    const { isLogin } = userStore
    const [hasMsg] = useState(true)
    return isLogin ? (
        <ButtonLink component={IconButton} to="/notification">
            {hasMsg ? (
                <Badge variant="dot" color="secondary">
                    <NotificationIcon />
                </Badge>
            ) : (
                <NotificationIcon />
            )}
        </ButtonLink>
    ) : null
}

export default observer(NotificationLink)
