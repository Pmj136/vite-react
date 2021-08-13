import React, { ReactNode, useContext } from 'react'
import { ListItem } from '@material-ui/core'
import { Store } from './DropDown'
import { useHistory } from 'react-router-dom'

interface IProps {
    children: ReactNode
    active?: boolean
    to: string
    replace?: boolean
}

function DropDownLinkItem(props: IProps) {
    const { setOpen } = useContext(Store)
    const history = useHistory()
    const onClick = () => {
        if (props.active) return
        let jump = history.push
        if (props.replace) jump = history.replace
        jump(props.to)
        setOpen(false)
    }
    return (
        <ListItem button selected={props.active} onClick={onClick}>
            {props.children}
        </ListItem>
    )
}

export default DropDownLinkItem
