import React, { ChangeEvent, ClipboardEvent, useState } from 'react'
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
    tagInfo:
        | {
              id: number
              name: string
          }
        | undefined
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

function PushDialog(props: IProps) {
    const [isLoading, setIsLoading] = useState(false)
    const history = useHistory()
    const location = useLocation()
    //标签变化
    const handleTagChange = (newState: { id: number; name: string }) => {
        props.onChange(newState)
    }
    // 封面变化
    const handleCoverChange = (url: string) => {
        props.onChange({ cover: url })
    }
    //摘要变化
    const handleBriefContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const newVal = e.target.value
        if (newVal.length > MAX_WORDS_LEN) {
            return
        }
        props.onChange({ briefContent: newVal })
    }
    //粘贴至摘要
    const handleBriefContentPaste = (e: ClipboardEvent) => {
        const pasteTxt = e.clipboardData.getData('text')
        if (pasteTxt.length + props.value.briefContent.length > MAX_WORDS_LEN) {
            toast('字数超出限制', {
                id: 'toast-warn-inputPaste',
                duration: 2500,
                icon: '😅',
            })
        }
    }
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
                    id: 'toast-warn-catch',
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
            maxWidth="sm"
            open={props.visible}
            onClose={props.onClose}
        >
            <DialogContent>
                <CellGroup gap={10}>
                    <Cell disableGutters title="文章标签">
                        <TagSelector
                            value={props.value.tagInfo}
                            onChange={handleTagChange}
                        />
                    </Cell>
                    <Cell
                        title="封面(可选)"
                        disableGutters
                        titleAlign="flex-start"
                    >
                        <CoverUpload
                            value={props.value.cover}
                            onChange={handleCoverChange}
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
                                onChange={handleBriefContentChange}
                                onPaste={handleBriefContentPaste}
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
