import React from 'react'
import { Avatar, IconButton } from '@material-ui/core'
import { observer } from 'mobx-react-lite'

interface IProps {
    url: string
}

function UserAvatar(props: IProps) {
    return (
        <IconButton>
            <Avatar src={props.url} style={{ width: 40, height: 40 }}>
                T
            </Avatar>
        </IconButton>
    )
}

export default observer(UserAvatar)
