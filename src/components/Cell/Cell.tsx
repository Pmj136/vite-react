import React, { ReactNode } from 'react'
import { ListItem, Typography } from '@material-ui/core'
import type { Property } from 'csstype'

interface IProps {
    title?: string
    children: ReactNode
    titleAlign?: Property.AlignSelf
}

function Cell({ title, children, titleAlign }: IProps) {
    return (
        <ListItem>
            <div className="j-cell-title" style={{ alignSelf: titleAlign }}>
                <Typography>{title}</Typography>
            </div>
            {children}
        </ListItem>
    )
}

export default Cell
