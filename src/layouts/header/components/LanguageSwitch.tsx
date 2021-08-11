import React from 'react'
import { Translate as LanguageIcon } from '@material-ui/icons'
import { IconButton } from '@material-ui/core'
import { toast } from 'react-hot-toast'
import { changeLanguage } from '@/i18n'
import { useTranslation } from 'react-i18next'

import DropDown from '@/components/DropDown/DropDown'
import DropDownItem from '@/components/DropDown/DropDownItem'

const loadingId = 'ls-loading-id'

function LanguageSwitch() {
    const { t, i18n } = useTranslation()
    const onSelect = (command: string) => {
        toast.loading(t('header.switchTip.loading'), {
            id: loadingId,
        })
        const timer = setTimeout(() => {
            toast.dismiss(loadingId)
            clearTimeout(timer)
            changeLanguage(command).then(() => {
                toast.success(t('header.switchTip.ok'))
            })
        }, 800)
    }
    return (
        <DropDown
            header={
                <IconButton>
                    <LanguageIcon color="action" />
                </IconButton>
            }
            onSelect={onSelect}
        >
            <DropDownItem command="zh-CN" active={i18n.language === 'zh-CN'}>
                中文
            </DropDownItem>
            <DropDownItem command="en" active={i18n.language === 'en'}>
                English
            </DropDownItem>
        </DropDown>
    )
}

export default LanguageSwitch
