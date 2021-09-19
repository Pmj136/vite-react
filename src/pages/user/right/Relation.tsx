import React from 'react'
import { Button, Card, Typography } from '@mui/material'
import styles from './relation.module.css'
import ButtonLink from '@/components/ButtonLink'
import AnimationNumber from '@/components/AnimationNumber'

interface IProps {
    data: {
        followCount: number
        fansCount: number
    }
}

function Relation({ data }: IProps) {
    return (
        <Card elevation={0} square>
            <div className={styles.relation}>
                <ButtonLink component={Button} to="/user/1/follow" replace>
                    <div className={styles['relation-item']}>
                        <Typography>关注</Typography>
                        <Typography variant="body2">
                            <AnimationNumber toNumber={data?.followCount} />
                        </Typography>
                    </div>
                </ButtonLink>
                <ButtonLink component={Button} to="/user/1/fans" replace>
                    <div className={styles['relation-item']}>
                        <Typography>粉丝</Typography>
                        <Typography variant="body2">
                            <AnimationNumber toNumber={data?.fansCount} />
                        </Typography>
                    </div>
                </ButtonLink>
            </div>
        </Card>
    )
}

export default Relation
