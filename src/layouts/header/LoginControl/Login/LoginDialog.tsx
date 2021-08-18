import React, { ReactNode } from 'react'
import { Dialog } from '@material-ui/core'
import { observer } from 'mobx-react-lite'
import appStore from '@/store/appStore'

interface IProps {
    children: ReactNode
}

function LoginDialog(props: IProps) {
    const { loginFormVisible } = appStore
    return (
        <Dialog
            // disablePortal
            disableEscapeKeyDown
            fullWidth
            maxWidth="xs"
            open={loginFormVisible}
        >
            {props.children}
        </Dialog>
    )
}

export default observer(LoginDialog)
