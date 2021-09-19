import React from 'react'
import { Card, Typography } from '@mui/material'
import { Assignment } from '@mui/icons-material'

import styles from './_.module.css'

interface IProps {
    show: boolean
}

function NoData(props: IProps) {
    return (
        <Card
            elevation={0}
            square
            style={{ display: props.show ? '' : 'none', height: 300 }}
        >
            <div className={styles.wrap}>
                <Assignment color="disabled" style={{ fontSize: 80 }} />
                <Typography color="textSecondary" style={{ marginLeft: 5 }}>
                    什么也没有
                </Typography>
            </div>
        </Card>
    )
}

export default NoData
