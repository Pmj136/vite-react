import React, { useState } from 'react'
import { Button, Dialog, DialogActions } from '@material-ui/core'
import { Cell, CellGroup } from '@/components/Cell'
import CoverUpload from '@/pages/creation/PushDialog/CoverUpload'

interface IProps {
    visible: boolean
    onClose: (event: any, reason: 'backdropClick' | 'escapeKeyDown') => void
    onConfirm: (extraParams: { [key: string]: any }) => void
}

function PushDialog(props: IProps) {
    const [form, setForm] = useState<{ [key: string]: any }>({ cover: null })
    const handleConfirm = () => {
        props.onConfirm(form)
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
                        cover={form.cover}
                        onUploaded={url => {
                            setForm({ ...form, cover: url })
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
                    onClick={handleConfirm}
                >
                    确定并发布
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default PushDialog
