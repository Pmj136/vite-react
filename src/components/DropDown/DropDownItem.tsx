import React, { ReactNode, useContext } from 'react'
import { ListItem } from '@mui/material'
import { Store } from './DropDown'

interface IProps {
    children: ReactNode
    active?: boolean
    onClick: () => void
}

function DropDownItem(props: IProps) {
    const { setOpen } = useContext(Store)
    const onClick = () => {
        if (props.active) return
        props.onClick()
        setOpen(false)
    }
    return (
        <ListItem button selected={props.active} onClick={onClick}>
            {props.children}
        </ListItem>
    )
}

export default DropDownItem
