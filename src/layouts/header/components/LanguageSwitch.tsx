import React from 'react'
import { Translate as LanguageIcon } from '@material-ui/icons'
import { IconButton } from '@material-ui/core'
import DropDown, { DropDownItem } from '@/components/DropDown'
import { toast } from 'react-hot-toast'
import { changeLanguage } from '@/i18n'
import { useTranslation } from 'react-i18next'

const dropDownItems: Array<DropDownItem> = [
    {
        command: 'zh',
        name: '中文',
    },
    {
        command: 'en',
        name: 'English',
    },
]

function LanguageSwitch() {
    const { i18n } = useTranslation()
    const onSelect = (target: DropDownItem) => {
        toast.loading('正在切换')
        const timer = setTimeout(() => {
            toast.dismiss()
            clearTimeout(timer)
            changeLanguage(target.command).then(() => {
                toast.success('切换成功')
            })
        }, 800)
    }
    return (
        <DropDown
            activeCommand={i18n.language}
            header={
                <IconButton>
                    <LanguageIcon color="action" />
                </IconButton>
            }
            dropDownItems={dropDownItems}
            onSelect={onSelect}
        />
    )
}

export default LanguageSwitch
