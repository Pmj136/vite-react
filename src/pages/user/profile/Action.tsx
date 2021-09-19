import React, { useState } from 'react'
import state from '@/store/userStore'
import { Button } from '@mui/material'
import { useHistory, useParams } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { setLoginDialogVisible } from '@/store/appStore'
import { doFollowApi, undoFollowApi } from '@/api/follow'

interface IProps {
    userId?: number
    isFollow?: boolean
}

function Action(props: IProps) {
    const { info, isLogin } = state
    const params = useParams<{ id: string }>()
    const [isFollow, setIsFollow] = useState(props.isFollow)
    const history = useHistory()
    const toSetting = () => {
        history.push('/setting/profile')
    }
    const handleUnFollow = () => {
        undoFollowApi(+params.id).then(() => {
            setIsFollow(false)
        })
    }
    const handleFollow = () => {
        if (!isLogin) {
            setLoginDialogVisible(true)
            return
        }
        doFollowApi({ targetId: +params.id }).then(() => {
            setIsFollow(true)
        })
    }
    if (info.id === props.userId)
        return (
            <Button
                size="small"
                variant="outlined"
                color="primary"
                onClick={toSetting}
            >
                编辑资料
            </Button>
        )
    if (isFollow)
        return (
            <Button
                size="small"
                variant="outlined"
                color="secondary"
                onClick={handleUnFollow}
            >
                取消关注
            </Button>
        )
    return (
        <Button
            size="small"
            variant="outlined"
            color="secondary"
            onClick={handleFollow}
        >
            关注
        </Button>
    )
}

export default observer(Action)
