import React, { useState } from 'react'
import state from '@/store/userStore'
import { Button } from '@material-ui/core'
import { useHistory, useParams } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { setLoginDialogVisible } from '@/store/appStore'
import { doFollowApi, undoFollowApi } from '@/api/follow'

interface IProps {
    userId?: number
    isFollow?: boolean
}

function Action(props: IProps) {
    const { uId, isLogin } = state
    const params = useParams<{ id: string }>()
    const [isFollow, setIsFollow] = useState(props.isFollow)
    const history = useHistory()
    const toSetting = () => {
        history.push('/setting/profile')
    }
    const handleUnFollow = () => {
        setIsFollow(false)
        undoFollowApi({ targetId: +params.id }).catch(() => {
            setIsFollow(true)
        })
    }
    const handleFollow = () => {
        if (!isLogin) {
            setLoginDialogVisible(true)
            return
        }
        setIsFollow(true)
        doFollowApi({ targetId: +params.id }).catch(() => {
            setIsFollow(false)
        })
    }
    if (uId === props.userId)
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
