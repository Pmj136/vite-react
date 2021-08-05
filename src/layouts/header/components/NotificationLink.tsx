import React from 'react'
import { IconButton, Badge } from '@material-ui/core'
import { NotificationsNone as NotificationIcon } from '@material-ui/icons'

function NotificationLink() {
    return (
        <IconButton>
            <Badge variant="dot" color="secondary">
                <NotificationIcon color="action" />
            </Badge>
        </IconButton>
    )
}

export default NotificationLink
