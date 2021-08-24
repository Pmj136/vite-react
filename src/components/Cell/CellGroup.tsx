import React, { ReactNode } from 'react'
import { List } from '@material-ui/core'

interface IProps {
    gap?: number
    children: ReactNode
}

function CellGroup({ gap = 24, children }: IProps) {
    return (
        <List style={{ gap, display: 'flex', flexDirection: 'column' }}>
            {children}
        </List>
    )
}

export default CellGroup
