import React from 'react'
import { Button, Card, Typography } from '@material-ui/core'
import styles from './relation.module.css'
import ButtonLink from '@/components/ButtonLink'

interface IProps {}

function Relation(props: IProps) {
    return (
        <Card elevation={0} square>
            <div className={styles.relation}>
                <ButtonLink component={Button} to="/user/1/follow" replace>
                    <div className={styles['relation-item']}>
                        <Typography>关注</Typography>
                        <Typography variant="body2">111</Typography>
                    </div>
                </ButtonLink>
                <ButtonLink component={Button} to="/user/1/fans" replace>
                    <div className={styles['relation-item']}>
                        <Typography>粉丝</Typography>
                        <Typography variant="body2">111</Typography>
                    </div>
                </ButtonLink>
            </div>
        </Card>
    )
}

export default Relation
