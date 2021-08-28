import React, { useEffect, useState } from 'react'
import E from 'wangeditor'
import { JPage, JPageSection } from '@/components/JPage'
import PageHeader from './PageHeader'
import PushDialog from './PushDialog/PushDialog'
import {
    addArticleApi,
    getDetailApi,
    updateArticleApi,
    uploadFileApi,
} from '@/api/article'
import { useHistory, useLocation } from 'react-router-dom'
import { toast } from 'react-hot-toast'

import './index.css'
import { Backdrop, CircularProgress, makeStyles } from '@material-ui/core'

let editor: any
const toastId = 'editor-rich-warn'
const useThemeStyles = makeStyles(theme => {
    const isLight = theme.palette.type === 'light'
    return {
        'rt-toolbar': {
            backgroundColor: isLight ? '#f1f1f1' : '#4b4b4b',
            '& [class^="w-e-icon-"], [class*=" w-e-icon-"]': {
                color: isLight ? '#777' : '#ccc' + ' !important',
                fontSize: 16,
            },
            '& .w-e-menu:hover': {
                backgroundColor: isLight ? '' : '#424242 !important',
            },
        },
        'rt-text-container': {
            '&  .w-e-text-container': {
                minHeight: '100vh',
                zIndex: '1000 !important',
                backgroundColor: isLight ? '#fff' : '#424242',
            },
        },
    }
})

function Creation() {
    const themeStyles = useThemeStyles()
    const [drawerVisible, setDrawerVisible] = useState(false)
    const [form, setForm] = useState({
        title: '',
        cover: null,
        content: '',
    })
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    const location = useLocation()

    //判断是新增还是更新，若为更新则加载数据
    useEffect(() => {
        const articleId = location.state as number
        if (articleId !== undefined) {
            setLoading(true)
            const timer = setTimeout(() => {
                getDetailApi(articleId)
                    .then(res => {
                        const article = res.data
                        setForm({
                            ...article,
                            cover: article.cover === '' ? null : article.cover,
                        })
                        editor.txt.html(article.content)
                    })
                    .finally(() => {
                        setLoading(false)
                        clearTimeout(timer)
                    })
            }, 400)
        }
    }, [])

    //初始化编辑器
    useEffect(() => {
        editor = new E('#rt-toolbar', '#rt-text-container')
        editor.config.showMenuTooltips = true
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
            'video',
            // 'table',
            'code',
            'splitLine',
            'undo',
            'redo',
        ]
        editor.config.customUploadImg = function (
            resultFiles: FileList,
            insertImgFn: (url: string) => void
        ) {
            uploadFileApi('article/img', resultFiles[0]).then(res => {
                insertImgFn(res.data)
            })
        }
        editor.config.showLinkVideo = false
        editor.config.customUploadVideo = function (
            resultFiles: FileList,
            insertVideoFn: (url: string) => void
        ) {
            uploadFileApi('article/video', resultFiles[0]).then(res => {
                insertVideoFn(res.data)
            })
        }
        editor.create()
        return () => {
            editor.destroy()
        }
    }, [])

    //显示确认发布弹框
    const showDialog = (title: string) => {
        const content = editor.txt.html()
        if (content === '') {
            toast('内容不能为空', {
                id: toastId,
                duration: 2500,
                icon: '😅',
            })
            return
        }
        setForm({ ...form, title, content })
        setDrawerVisible(true)
    }

    //提交数据
    const pushData = (extraParams: { [key: string]: any }) => {
        const articleData: any = { ...form, ...extraParams }
        setLoading(true)
        if (articleData.id !== undefined) {
            //有id存在，更新操作
            updateArticleApi(articleData).then(() => {
                history.replace('/')
            })
        } else {
            addArticleApi(articleData).then(() => {
                history.replace('/')
            })
        }
    }

    //关闭确认发布弹窗
    const handleDrawerClose = (e: any, reason: string) => {
        if (reason === 'backdropClick') return
        setDrawerVisible(false)
    }
    return (
        <>
            <Backdrop style={{ zIndex: 2000 }} open={loading}>
                <CircularProgress color="inherit" />
            </Backdrop>
            <PageHeader value={form.title} onSubmit={showDialog} />
            <div id="rt-toolbar" className={themeStyles['rt-toolbar']} />
            <JPage directionMargin={16}>
                <JPageSection xs={8.8}>
                    <div
                        id="rt-text-container"
                        className={themeStyles['rt-text-container']}
                    />
                </JPageSection>
            </JPage>
            <PushDialog
                value={{ cover: form.cover }}
                visible={drawerVisible}
                onClose={handleDrawerClose}
                onConfirm={pushData}
            />
        </>
    )
}

export default Creation
