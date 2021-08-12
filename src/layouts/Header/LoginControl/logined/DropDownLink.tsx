import React from 'react'
import { useTranslation } from 'react-i18next'
import { useHistory, useLocation } from 'react-router-dom'
import DropDown from '@/components/DropDown/DropDown'
import DropDownItem from '@/components/DropDown/DropDownItem'
import userStore from '@/store/userStore'
import UserAvatar from './UserAvatar'

function DropDownLink() {
    const { logout } = userStore
    const history = useHistory()
    const location = useLocation()
    const { t } = useTranslation()
    const handleSelect = (command: string) => {
        if (command === 'exit') {
            logout.call(userStore)
        }
        if (command === 'user') {
            history.push('/user/1')
        }
        if (command === 'setting') {
            history.push('/setting/profile')
        }
    }
    return (
        <DropDown header={<UserAvatar />} onSelect={handleSelect}>
            <DropDownItem
                command="user"
                active={location.pathname.includes('/user')}
            >
                {t('header.userDropDown.user')}
            </DropDownItem>
            <DropDownItem
                command="setting"
                active={location.pathname.includes('/setting')}
            >
                {t('header.userDropDown.setting')}
            </DropDownItem>
            <DropDownItem command="exit">
                {t('header.userDropDown.exit')}
            </DropDownItem>
        </DropDown>
    )
}

export default DropDownLink
