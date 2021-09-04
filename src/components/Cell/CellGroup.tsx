import React, { ReactNode } from 'react'
import { List } from '@material-ui/core'

interface IProps {
    gap?: number
    children: ReactNode
}

function CellGroup({ gap = 24, children }: IProps) {
    return (
        <List className="j-cell-group" style={{ gap }}>
            {children}
        </List>
    )
}

export default CellGroup
