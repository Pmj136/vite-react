import React, { createElement } from 'react'
import styles from './profile.module.css'
import { Avatar, Badge, Box, Typography } from '@material-ui/core'
import Action from './Action'
import Male from '@/svg/Male'
import Female from '@/svg/Female'
import ProfileSkeleton from './ProfileSkeleton'

interface IProps {
    data?: {
        id: number
        nick: string
        gender: number
        avatarUrl: string
        createTime: string
        address: string
        intro: string
        isFollow?: boolean
    }
}

function Profile({ data }: IProps) {
    if (data === undefined) return <ProfileSkeleton />
    return (
        <div className={styles.container}>
            <Badge
                component="div"
                overlap="circular"
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                badgeContent={
                    !!data.gender
                        ? createElement(data.gender === 1 ? Male : Female)
                        : null
                }
            >
                <Avatar
                    style={{ width: 120, height: 120 }}
                    src={data.avatarUrl}
                />
            </Badge>
            <div className={styles['user-info']}>
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
                    {data.createTime} 加入
                </Typography>
                <Box p={1} />
                <Typography
                    color="textSecondary"
                    component="span"
                    variant="body2"
                >
                    {data.address ? (
                        <>
                            来自{' '}
                            <a
                                href={
                                    'https://www.baidu.com/s?ie=UTF-8&wd=' +
                                    data.address
                                }
                                target="_blank"
                                rel="noreferrer"
                            >
                                {data.address}
                            </a>
                        </>
                    ) : (
                        '似乎来自外星……'
                    )}
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
                <Action userId={data.id} isFollow={data.isFollow} />
            </div>
        </div>
    )
}

export default Profile
