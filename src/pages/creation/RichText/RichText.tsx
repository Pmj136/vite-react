import React, { useEffect } from 'react'
import E from 'wangeditor'
import { JPage, JPageSection } from '@/components/JPage'
import PageHeader from '../PageHeader/PageHeader'

import './index.css'

let editor: any

function Creation() {
    const getHtml = () => {
        console.log(editor.txt.html())
    }
    useEffect(() => {
        editor = new E('#rt-toolbar', '#rt-text-container')
        editor.config.showMenuTooltips = true
        editor.config.menuTooltipPosition = 'down'
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
        // editor.config.uploadImgServer = '/upload-img'
        editor.create()
        return () => {
            editor.destroy()
        }
    }, [])
    return (
        <>
            <PageHeader />
            <div id="rt-toolbar" />
            <JPage>
                <JPageSection xs={8.8}>
                    <div id="rt-text-container" />
                </JPageSection>
            </JPage>
        </>
    )
}

export default Creation
