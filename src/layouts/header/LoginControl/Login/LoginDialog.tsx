import React, { ReactNode } from 'react'
import { Dialog } from '@material-ui/core'
import { observer } from 'mobx-react-lite'
import state from '@/store/appStore'

interface IProps {
    children: ReactNode
}

function LoginDialog(props: IProps) {
    return (
        <Dialog
            // disablePortal
            disableEscapeKeyDown
            fullWidth
            maxWidth="xs"
            open={state.loginDialogVisible}
        >
            {props.children}
        </Dialog>
    )
}

export default observer(LoginDialog)
