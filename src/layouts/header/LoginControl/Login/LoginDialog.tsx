import React, { ReactNode } from 'react'
import { Dialog } from '@material-ui/core'
import { observer } from 'mobx-react-lite'
import appStore from '@/store/appStore'

interface IProps {
    children: ReactNode
}

function LoginDialog(props: IProps) {
    const { loginDialogVisible } = appStore
    return (
        <Dialog
            // disablePortal
            disableEscapeKeyDown
            fullWidth
            maxWidth="xs"
            open={loginDialogVisible}
        >
            {props.children}
        </Dialog>
    )
}

export default observer(LoginDialog)
