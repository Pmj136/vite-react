import React, { ReactNode, useContext } from 'react'
import { ListItem } from '@material-ui/core'
import { Store } from './DropDown'
import { Link } from 'react-router-dom'

interface IProps {
    children: ReactNode
    active?: boolean
    to: string
    replace?: boolean
}

function DropDownLinkItem(props: IProps) {
    const { setOpen } = useContext(Store)
    const onClick = () => {
        if (props.active) return
        setOpen(false)
    }
    return (
        <ListItem
            button
            component={Link}
            to={props.to}
            replace={props.replace || false}
            selected={props.active}
            onClick={onClick}
        >
            {props.children}
        </ListItem>
    )
}

export default DropDownLinkItem
