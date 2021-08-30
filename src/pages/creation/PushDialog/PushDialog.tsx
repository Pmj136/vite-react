import React, { useState } from 'react'
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    FormControl,
    OutlinedInput,
} from '@material-ui/core'
import { Cell, CellGroup } from '@/components/Cell'
import CoverUpload from '@/pages/creation/PushDialog/CoverUpload'
import { useHistory, useLocation } from 'react-router-dom'
import WordCounter from '@/pages/creation/PushDialog/WordCounter'
import { toast } from 'react-hot-toast'

interface IProps {
    visible: boolean
    onClose: (event: any, reason: 'backdropClick' | 'escapeKeyDown') => void
    value: { cover: string; briefContent: string }
    onChange: (extraParams: { [key: string]: any }) => void
    onConfirm: () => Promise<any>
}

const MAX_WORDS_LEN = 100

function PushDialog(props: IProps) {
    const [isLoading, setIsLoading] = useState(false)
    const history = useHistory()
    const location = useLocation()
    const typeStr = location.state === undefined ? '发布' : '更新'
    const handleConfirm = () => {
        setIsLoading(true)
        props
            .onConfirm()
            .then(() => {
                history.replace('/')
            })
            .catch(msg => {
                toast(msg, {
                    id: 'toast-warn-contentNull',
                    duration: 2500,
                    icon: '😅',
                })
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
            <DialogContent>
                <CellGroup gap={6}>
                    <Cell
                        title="封面(可选)"
                        disableGutters
                        titleAlign="flex-start"
                    >
                        <CoverUpload
                            cover={props.value.cover}
                            onChange={url => {
                                props.onChange({ cover: url })
                            }}
                        />
                    </Cell>
                    <Cell
                        title="编辑摘要"
                        disableGutters
                        titleAlign="flex-start"
                    >
                        <FormControl hiddenLabel style={{ flex: 0.95 }}>
                            <OutlinedInput
                                value={props.value.briefContent}
                                onChange={e => {
                                    const newVal = e.target.value
                                    if (newVal.length > MAX_WORDS_LEN) {
                                        return
                                    }
                                    props.onChange({ briefContent: newVal })
                                }}
                                onPaste={e => {
                                    const pasteTxt =
                                        e.clipboardData.getData('text')
                                    if (
                                        pasteTxt.length +
                                            props.value.briefContent.length >
                                        100
                                    ) {
                                        toast('字数超出限制', {
                                            id: 'toast-warn-inputPaste',
                                            duration: 2500,
                                            icon: '😅',
                                        })
                                    }
                                }}
                                multiline
                                minRows={3}
                                maxRows={3}
                                placeholder="此处可以填写文章的主旨内容"
                            />
                            <WordCounter
                                active={30}
                                curr={props.value.briefContent.length}
                                end={MAX_WORDS_LEN}
                            />
                        </FormControl>
                    </Cell>
                </CellGroup>
            </DialogContent>
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
                    {isLoading ? '正在发布中' : '确定并' + typeStr}
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default PushDialog
