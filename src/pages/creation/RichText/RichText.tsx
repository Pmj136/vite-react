import React, { useEffect, useState } from 'react'
import E from 'wangeditor'
import { JPage, JPageSection } from '@/components/JPage'
import PageHeader from '../PageHeader/PageHeader'
import PushDialog from '../PushDialog/PushDialog'
import { toast } from 'react-hot-toast'

import './index.css'
import { addArticleApi } from '@/api/article'
import { useHistory } from 'react-router-dom'

let editor: any
const toastId = 'editor-rich-warn'

function Creation() {
    const [drawerVisible, setDrawerVisible] = useState(false)
    const [form, setForm] = useState({})
    const history = useHistory()
    useEffect(() => {
        editor = new E('#rt-toolbar', '#rt-text-container')
        editor.config.showMenuTooltips = true
        // editor.config.menuTooltipPosition = 'down'
        editor.config.placeholder = '输入正文……'
        editor.config.focus = false
        editor.config.menus = [
            'bold',
            'italic',
            'underline',
            'head',
            'fontSize',
            // 'fontName',
            'strikeThrough',
            // 'indent',
            'lineHeight',
            'foreColor',
            // 'backColor',
            'link',
            'list',
            // 'todo',
            'justify',
            'quote',
            'emoticon',
            'image',
            // 'video',
            // 'table',
            'code',
            'splitLine',
            'undo',
            'redo',
        ]
        editor.config.uploadImgServer = '/upload-img'
        editor.create()
        return () => {
            editor.destroy()
        }
    }, [])
    const showDialog = (title: any) => {
        if (title === '') {
            toast('标题不能为空', {
                id: toastId,
                duration: 2500,
                icon: '😅',
            })
            return
        }
        if (title !== '' && title.trim() === '') {
            toast('标题不能为空白', {
                id: toastId,
                duration: 2500,
                icon: '😅',
            })
            return
        }
        const content = editor.txt.html()
        if (content === '') {
            toast('内容不能为空', {
                id: toastId,
                duration: 2500,
                icon: '😅',
            })
            return
        }
        setForm({ title, content })
        setDrawerVisible(true)
    }

    const pushData = (extraParams: any) => {
        addArticleApi({ ...extraParams, ...form }).then(() => {
            history.replace('/')
        })
    }
    const handleDrawerClose = (e: any, reason: string) => {
        if (reason === 'backdropClick') return
        setDrawerVisible(false)
    }

    return (
        <>
            <PageHeader onSubmit={showDialog} />
            <div id="rt-toolbar" />
            <JPage directionMargin={16}>
                <JPageSection xs={8.8}>
                    <div id="rt-text-container" />
                </JPageSection>
            </JPage>
            <PushDialog
                visible={drawerVisible}
                onClose={handleDrawerClose}
                onConfirm={pushData}
            />
        </>
    )
}

export default Creation
