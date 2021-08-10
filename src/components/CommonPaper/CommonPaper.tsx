import React, { ReactNode } from 'react'
import { Paper } from '@material-ui/core'
import classes from './_.module.css'

interface IProps {
    children: ReactNode
}

function CommonPaper(props: IProps) {
    return (
        <Paper elevation={0} className={classes.paper}>
            {props.children}
        </Paper>
    )
}

export default CommonPaper
