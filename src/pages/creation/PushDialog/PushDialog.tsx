import React, { useState } from 'react'
import { Button, Dialog, DialogActions } from '@material-ui/core'
import { Cell, CellGroup } from '@/components/Cell'
import CoverUpload from '@/pages/creation/PushDialog/CoverUpload'
import { useHistory } from 'react-router-dom'

interface IProps {
    visible: boolean
    onClose: (event: any, reason: 'backdropClick' | 'escapeKeyDown') => void
    value: { cover: string }
    onChange: (extraParams: { [key: string]: any }) => void
    onConfirm: () => Promise<any>
}

function PushDialog(props: IProps) {
    const [isLoading, setIsLoading] = useState(false)
    const history = useHistory()
    const handleConfirm = () => {
        setIsLoading(true)
        props
            .onConfirm()
            .then(() => {
                history.replace('/')
            })
            .finally(() => {
                setIsLoading(false)
            })
    }
    return (
        <Dialog
            fullWidth
            maxWidth="xs"
            open={props.visible}
            onClose={props.onClose}
        >
            <CellGroup>
                <Cell title="封面(可选)：" titleAlign="flex-start">
                    <CoverUpload
                        cover={props.value.cover}
                        onChange={url => {
                            props.onChange({ cover: url })
                        }}
                    />
                </Cell>
            </CellGroup>
            <DialogActions>
                <Button
                    size="small"
                    variant="contained"
                    onClick={e => props.onClose(e, 'escapeKeyDown')}
                >
                    取消
                </Button>
                <Button
                    size="small"
                    variant="contained"
                    color="primary"
                    disabled={isLoading}
                    onClick={handleConfirm}
                >
                    {isLoading ? '正在发布中' : '确定并发布'}
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default PushDialog
