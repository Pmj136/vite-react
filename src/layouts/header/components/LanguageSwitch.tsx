import React from 'react'
import { Translate as LanguageIcon } from '@material-ui/icons'
import { IconButton } from '@material-ui/core'
import { toast } from 'react-hot-toast'
import { changeLanguage } from '@/i18n'
import { useTranslation } from 'react-i18next'

import DropDown from '@/components/DropDown/DropDown'
import DropDownItem from '@/components/DropDown/DropDownItem'

function LanguageSwitch() {
    const { t, i18n } = useTranslation()
    const onSelect = (command: string) => {
        toast.loading(t('header.switchTip.loading'))
        const timer = setTimeout(() => {
            toast.dismiss()
            clearTimeout(timer)
            changeLanguage(command).then(() => {
                toast.success(t('header.switchTip.ok'))
            })
        }, 800)
    }
    return (
        <DropDown
            selectedCommand={i18n.language}
            header={
                <IconButton>
                    <LanguageIcon color="action" />
                </IconButton>
            }
            onSelect={onSelect}
        >
            <DropDownItem command="zh-CN">中文</DropDownItem>
            <DropDownItem command="en">English</DropDownItem>
        </DropDown>
    )
}

export default LanguageSwitch
