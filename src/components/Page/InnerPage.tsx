import React, { ReactNode } from 'react'
import { Grid } from '@material-ui/core'
import styles from './_.module.css'

interface IProps {
    width?: number
    children: ReactNode
}

function InnerPage(props: IProps) {
    return (
        <section className={styles.container} style={{ width: props.width }}>
            <Grid container spacing={2}>
                {props.children}
            </Grid>
        </section>
    )
}

export default InnerPage
