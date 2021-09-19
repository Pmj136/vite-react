import React, { useState } from 'react'
import { IconButton, Badge } from '@mui/material'
import { NotificationsNone as NotificationIcon } from '@mui/icons-material'
import state from '@/store/userStore'
import { observer } from 'mobx-react-lite'
import ButtonLink from '@/components/ButtonLink'

function NotificationLink() {
    const [hasMsg] = useState(true)
    return state.isLogin ? (
        <ButtonLink component={IconButton} to="/notification">
            {hasMsg ? (
                <Badge variant="dot" color="error">
                    <NotificationIcon color="action" />
                </Badge>
            ) : (
                <NotificationIcon />
            )}
        </ButtonLink>
    ) : null
}

export default observer(NotificationLink)
