import React from 'react'
import { Skeleton } from '@material-ui/lab'
import { Card } from '@material-ui/core'

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
