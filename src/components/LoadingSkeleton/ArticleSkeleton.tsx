import React from 'react'
import { Card, Skeleton } from '@mui/material'

interface IProps {
    show: boolean
}

function ArticleSkeleton(props: IProps) {
    return (
        <Card
            elevation={0}
            square
            style={{ display: props.show ? '' : 'none' }}
        >
            <Skeleton width={30} height={40} />
            <Skeleton width={300} height={60} />
        </Card>
    )
}

export default ArticleSkeleton
