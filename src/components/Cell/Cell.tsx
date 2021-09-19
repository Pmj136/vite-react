import React, { ReactNode } from 'react'
import { ListItem, Typography } from '@mui/material'
import type { Property } from 'csstype'

interface IProps {
    title?: string
    children: ReactNode
    titleAlign?: Property.AlignSelf
    disableGutters?: boolean
}

function Cell({ title, children, titleAlign, disableGutters = false }: IProps) {
    return (
        <ListItem disableGutters={disableGutters}>
            <div className="j-cell-title" style={{ alignSelf: titleAlign }}>
                <Typography>{title}</Typography>
            </div>
            {children}
        </ListItem>
    )
}

export default Cell
