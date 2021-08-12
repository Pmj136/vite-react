import React, { ReactNode, useContext } from 'react'
import { MenuItem } from '@material-ui/core'
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
        <MenuItem
            style={{
                backgroundColor: props.active ? 'rgba(0,0,0,0.04)' : '',
            }}
            onClick={onClick}
        >
            {props.children}
        </MenuItem>
    )
}

export default DropDownItem
