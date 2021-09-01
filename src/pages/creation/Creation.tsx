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
import { useLocation } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { Backdrop, CircularProgress, makeStyles } from '@material-ui/core'
import './index.css'

let editor: any
const toastId = 'editor-warn-creation'
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
                zIndex: '499 !important',
                backgroundColor: isLight ? '#fff' : '#424242',
            },
        },
    }
})

function Creation() {
    const themeStyles = useThemeStyles()
    const [drawerVisible, setDrawerVisible] = useState(false)
    const [form, setForm] = useState<any>({
        title: '',
        content: '',
        cover: '',
        briefContent: '',
        tagId: 0,
        tagName: '',
    })
    const location = useLocation()

    //判断是新增还是更新，若为更新则加载数据
    useEffect(() => {
        const articleId = location.state
        if (articleId !== undefined) {
            const timer = setTimeout(async () => {
                try {
                    const res = await getDetailApi(articleId as number)
                    const article = res.data
                    setForm(article)
                    editor.txt.html(article.content)
                } finally {
                    clearTimeout(timer)
                }
            }, 200)
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
    const pushData = () => {
        if (form.tagId === 0) {
            return Promise.reject('请添加一个文章标签')
        }
        if (form.briefContent.length < 30) {
            return Promise.reject('摘要内容不得少于30字')
        }
        if (form.id !== undefined) {
            //有id存在，更新操作
            return updateArticleApi(form)
        }
        //否则是插入操作
        return addArticleApi(form)
    }

    //关闭确认发布弹窗
    const handleDrawerClose = (e: any, reason: string) => {
        if (reason === 'backdropClick') return
        setDrawerVisible(false)
    }
    return (
        <>
            <Backdrop
                style={{ zIndex: 1000 }}
                open={form.title === '' && location.state !== undefined}
            >
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
                value={{
                    tagInfo: {
                        id: form.tagId,
                        name: form.tagName,
                    },
                    cover: form.cover,
                    briefContent: form.briefContent,
                }}
                onChange={e => setForm({ ...form, ...e })}
                visible={drawerVisible}
                onClose={handleDrawerClose}
                onConfirm={pushData}
            />
        </>
    )
}

export default Creation
