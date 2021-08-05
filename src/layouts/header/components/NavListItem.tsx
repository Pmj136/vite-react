import React from 'react'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

interface IProps {
    title: string
    path: string
    activePath: string
}

function NavListItem(props: IProps) {
    return (
        <Button
            to={props.path}
            color={props.activePath === props.path ? 'primary' : 'default'}
            size="large"
            component={Link}
        >
            {props.title}
        </Button>
    )
}

export default NavListItem
