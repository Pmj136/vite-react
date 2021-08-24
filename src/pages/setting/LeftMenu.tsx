import React from 'react'
import { List, ListItem, ListItemIcon, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { AccountCircle, Settings, VisibilityOff } from '@material-ui/icons'

interface IProps {
    currComponent: string
}

function LeftMenu(props: IProps) {
    return (
        <List component="nav">
            <ListItem
                button
                component={Link}
                to="/setting/profile"
                replace
                selected={props.currComponent === 'profile'}
            >
                <ListItemIcon>
                    <AccountCircle />
                </ListItemIcon>
                <Typography variant="body2">个人资料</Typography>
            </ListItem>
            <ListItem
                button
                component={Link}
                to="/setting/account"
                replace
                selected={props.currComponent === 'account'}
            >
                <ListItemIcon>
                    <Settings />
                </ListItemIcon>
                <Typography variant="body2">账号设置</Typography>
            </ListItem>
        </List>
    )
}

export default LeftMenu
