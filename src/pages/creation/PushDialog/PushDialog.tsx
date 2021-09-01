import React, { useEffect, useState } from 'react'
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    FormControl,
    OutlinedInput,
} from '@material-ui/core'
import { Cell, CellGroup } from '@/components/Cell'
import { useHistory, useLocation } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import CoverUpload from './CoverUpload'
import WordCounter from './WordCounter'
import TagSelector from './TagSelector'

interface IDialogState {
    tagInfo: {
        id: number
        name: string
    }
    cover: string
    briefContent: string
}

interface IProps {
    visible: boolean
    onClose: (event: any, reason: 'backdropClick' | 'escapeKeyDown') => void
    value: IDialogState
    onChange: (extraParams: { [key: string]: any }) => void
    onConfirm: () => Promise<any>
}

const MAX_WORDS_LEN = 100
const toastId = 'toast-warn-pushDialog'

function PushDialog(props: IProps) {
    const [isLoading, setIsLoading] = useState(false)
    const history = useHistory()
    const location = useLocation()
    useEffect(() => {
        return () => {
            toast.dismiss(toastId)
            setIsLoading(false)
        }
    }, [])
    //提交
    const handleConfirm = () => {
        setIsLoading(true)
        props
            .onConfirm()
            .then(() => {
                history.replace('/')
            })
            .catch(msg => {
                toast(msg, {
                    id: toastId,
                    duration: 2500,
                    icon: '😅',
                })
                setIsLoading(false)
            })
    }
    return (
        <Dialog
            fullWidth
            maxWidth="sm"
            open={props.visible}
            onClose={props.onClose}
        >
            <DialogContent>
                <CellGroup gap={10}>
                    <Cell title="文章标签" disableGutters>
                        <TagSelector
                            value={props.value.tagInfo}
                            onChange={newState => props.onChange(newState)}
                        />
                    </Cell>
                    <Cell
                        title="封面(可选)"
                        disableGutters
                        titleAlign="flex-start"
                    >
                        <CoverUpload
                            value={props.value.cover}
                            onChange={url => props.onChange({ cover: url })}
                        />
                    </Cell>
                    <Cell
                        title="编辑摘要"
                        disableGutters
                        titleAlign="flex-start"
                    >
                        <FormControl hiddenLabel style={{ flex: 0.9 }}>
                            <OutlinedInput
                                multiline
                                minRows={3}
                                maxRows={3}
                                placeholder="此处可以填写文章的主旨内容"
                                value={props.value.briefContent}
                                onPaste={e => {
                                    //用户粘贴时检测字数是否超出限制
                                    const pasteTxt =
                                        e.clipboardData.getData('text')
                                    if (
                                        pasteTxt.length +
                                            props.value.briefContent.length >
                                        MAX_WORDS_LEN
                                    ) {
                                        toast('字数超出限制', {
                                            id: toastId,
                                            duration: 2500,
                                            icon: '😅',
                                        })
                                    }
                                }}
                                onChange={e => {
                                    //字数检测
                                    const newVal = e.target.value
                                    if (newVal.length > MAX_WORDS_LEN) {
                                        return
                                    }
                                    props.onChange({ briefContent: newVal })
                                }}
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
                    {isLoading
                        ? '正在发布中'
                        : '确定并' +
                          (location.state === undefined ? '发布' : '更新')}
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default PushDialog
