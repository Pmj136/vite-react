import React, { createElement } from 'react'
import styles from './info.module.css'
import { Avatar, Badge, Box, Typography } from '@material-ui/core'
import { IUser } from '@/types/user'
import Action from './Action'
import Male from '@/svg/Male'
import Female from '@/svg/Female'
import { useSWR } from '@/hooks'
import { getInfoApi } from '@/api/user'

interface IProps {
    id: number
}

function Info(props: IProps) {
    const fetchApi = () => getInfoApi(props.id)
    const { data, isLoading } = useSWR<IUser>(fetchApi, {})
    return (
        <div className={styles['container']}>
            {!!data.gender && (
                <Badge
                    component="div"
                    overlap="circular"
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    badgeContent={createElement(
                        data.gender === 1 ? Male : Female
                    )}
                >
                    <Avatar
                        style={{ width: 100, height: 100 }}
                        src={data.avatarUrl}
                    />
                </Badge>
            )}
            <div className={styles['user-UserInfo']}>
                <Typography color="primary" component="span">
                    {data.nick}
                </Typography>
            </div>
            <div className={styles['user-extra']}>
                <Typography
                    color="textSecondary"
                    component="span"
                    variant="body2"
                >
                    {data.createAt} 加入
                </Typography>
                <Box p={1} />
                <Typography
                    color="textSecondary"
                    component="span"
                    variant="body2"
                >
                    {data.address || '似乎来自外星……'}
                </Typography>
            </div>
            <Typography
                color="textSecondary"
                component="div"
                variant="body2"
                align="center"
                style={{ width: '75%' }}
            >
                {data.intro || '这个人很懒啥也没有！'}
            </Typography>
            <div className={styles['action-wrap']}>
                <Action userId={data.id} />
            </div>
        </div>
    )
}

export default Info
