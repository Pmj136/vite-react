import React from 'react'
import { Button } from '@material-ui/core'
import { Create as WriteIcon } from '@material-ui/icons'
import { observer } from 'mobx-react-lite'
import state from '@/store/userStore'
import { setLoginDialogVisible } from '@/store/appStore'
import { useHistory } from 'react-router-dom'

function WriteLink() {
    const history = useHistory()
    const toWritePage = () => {
        if (!state.isLogin) {
            setLoginDialogVisible(true)
            return
        }
        history.push('/push')
    }
    return (
        <Button
            style={{ marginLeft: 16 }}
            variant="contained"
            color="secondary"
            startIcon={<WriteIcon />}
            onClick={toWritePage}
        >
            写文章
        </Button>
    )
}

export default observer(WriteLink)
