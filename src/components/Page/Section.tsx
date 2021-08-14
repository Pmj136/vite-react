import React, { ReactNode } from 'react'
import { Grid } from '@material-ui/core'
import type { GridSize } from '@material-ui/core/Grid/Grid'

interface IProps {
    xs: GridSize
    children: ReactNode
}

function Section(props: IProps) {
    return (
        <Grid item xs={props.xs}>
            {props.children}
        </Grid>
    )
}

export default Section
