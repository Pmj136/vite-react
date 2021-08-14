import React from 'react'
import userStore from '@/store/userStore'
import { Button } from '@material-ui/core'
import { observer } from 'mobx-react-lite'
import { useHistory } from 'react-router-dom'

interface IProps {
    userId: number | undefined
}

function Action(props: IProps) {
    const { uId } = userStore
    const history = useHistory()
    const toSetting = () => {
        history.push('/setting/profile')
    }
    if (props.userId === undefined) return null
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
    return (
        <Button size="small" variant="outlined" color="secondary">
            关注
        </Button>
    )
}

export default observer(Action)
