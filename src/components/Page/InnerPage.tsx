import React, { ReactNode, useEffect } from 'react'
import { Grid } from '@material-ui/core'
import styles from './_.module.css'

interface IProps {
    autoScrollToTop?: boolean
    width?: number | string
    children: ReactNode
}

function InnerPage({ autoScrollToTop = true, width, children }: IProps) {
    useEffect(() => {
        if (autoScrollToTop) {
            const el = document.querySelector('html') as Element
            el.scrollTo(0, 0)
        }
    }, [])
    return (
        <section className={styles.container} style={{ width }}>
            <Grid container spacing={2}>
                {children}
            </Grid>
        </section>
    )
}

export default InnerPage
