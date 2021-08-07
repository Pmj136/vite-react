import React from 'react'
import { Translate as LanguageIcon } from '@material-ui/icons'
import { IconButton } from '@material-ui/core'
import { toast } from 'react-hot-toast'
import { changeLanguage } from '@/i18n'
import { Trans, getI18n } from 'react-i18next'

import DropDown from '@/components/DropDown/DropDown'
import DropDownItem from '@/components/DropDown/DropDownItem'

const i18n = getI18n()

function LanguageSwitch() {
    const onSelect = (command: string) => {
        toast.loading(<Trans>header.switchTip.loading</Trans>)
        const timer = setTimeout(() => {
            toast.dismiss()
            clearTimeout(timer)
            changeLanguage(command).then(() => {
                toast.success(<Trans>header.switchTip.ok</Trans>)
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
