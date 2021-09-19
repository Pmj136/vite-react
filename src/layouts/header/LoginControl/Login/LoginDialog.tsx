import React, { forwardRef, ReactNode } from 'react'
import { Dialog, Slide } from '@mui/material'
import type { TransitionProps } from '@mui/material/transitions'
import { observer } from 'mobx-react-lite'
import state from '@/store/appStore'

interface IProps {
    children: ReactNode
}

const Transition = forwardRef(function Transition(
    props: TransitionProps & { children?: React.ReactElement<any, any> },
    ref: React.Ref<unknown>
) {
    return <Slide direction="up" ref={ref} {...props} />
})

function LoginDialog(props: IProps) {
    return (
        <Dialog
            // disablePortal
            disableEscapeKeyDown
            fullWidth
            maxWidth="xs"
            TransitionComponent={Transition}
            open={state.loginDialogVisible}
        >
            {props.children}
        </Dialog>
    )
}

export default observer(LoginDialog)
