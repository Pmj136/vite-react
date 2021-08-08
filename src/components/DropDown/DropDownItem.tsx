import React, { MouseEvent, ReactNode, useContext } from 'react'
import { MenuItem } from '@material-ui/core'
import { Store } from './DropDown'

interface IProps {
    command: any
    children: ReactNode
}

function DropDownItem(props: IProps) {
    const { selectedCommand, onSelect } = useContext(Store)

    const onClick = (event: MouseEvent<EventTarget>) => {
        onSelect(event, props.command)
    }
    return (
        <MenuItem
            style={{
                backgroundColor:
                    selectedCommand === props.command ? 'rgba(0,0,0,0.04)' : '',
            }}
            onClick={onClick}
        >
            {props.children}
        </MenuItem>
    )
}

export default DropDownItem
