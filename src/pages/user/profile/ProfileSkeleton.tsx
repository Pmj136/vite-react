import React from 'react'
import { Box, Skeleton } from '@mui/material'
import styles from './profile.module.css'

function ProfileSkeleton() {
    return (
        <div className={styles.container}>
            <Skeleton variant="circular" width={120} height={120} />
            <div className={styles['user-info']}>
                <Skeleton width={120} height={25.6} />
            </div>
            <div className={styles['user-extra']}>
                <Skeleton width={160} height={20.8} />
                <Box p={1} />
                <Skeleton width={80} height={20.8} />
            </div>
            <Skeleton width={200} height={20.8} />
        </div>
    )
}

export default ProfileSkeleton
