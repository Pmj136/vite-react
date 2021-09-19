import React, { createContext, ReactNode, useCallback, useState } from 'react'
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogProps,
    DialogTitle,
} from '@mui/material'

interface IProps {
    children: ReactNode
}

interface Options {
    title: string
    text: {
        cancel: string
        confirm: string
    }
    content?: ReactNode | string
    onConfirm?: () => void
    onCancel?: () => void
    dialogProps?: DialogProps
}

const defaultValue: any = null

export const ConfirmContext = createContext(defaultValue)

function ConfirmDriver(props: IProps) {
    const [options, setOptions] = useState<Options | null>(null)
    const instance = useCallback((options: Options) => {
        setOptions(options)
    }, [])
    const handleCancel = () => {
        setOptions(null)
        options != null && options.onCancel && options.onCancel()
    }
    const handleConfirm = () => {
        options != null && options.onConfirm && options.onConfirm()
        setOptions(null)
    }
    return (
        <>
            <ConfirmContext.Provider value={instance}>
                {props.children}
            </ConfirmContext.Provider>
            {options != null && (
                <Dialog
                    {...options?.dialogProps}
                    fullWidth
                    maxWidth="xs"
                    open
                    onClose={options?.onCancel}
                >
                    <DialogTitle>{options?.title || 'Tip'}</DialogTitle>
                    <DialogContent>{options?.content}</DialogContent>
                    <DialogActions>
                        <Button
                            size="small"
                            variant="contained"
                            color="info"
                            onClick={handleCancel}
                        >
                            {options?.text.cancel}
                        </Button>
                        <Button
                            size="small"
                            variant="contained"
                            onClick={handleConfirm}
                        >
                            {options?.text.confirm}
                        </Button>
                    </DialogActions>
                </Dialog>
            )}
        </>
    )
}

export default ConfirmDriver
