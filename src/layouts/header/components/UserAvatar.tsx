import React from 'react'
import { Avatar, IconButton } from '@material-ui/core'
import DropDown from '@/components/DropDown/DropDown'
import DropDownItem from '@/components/DropDown/DropDownItem'
import userStore from '@/store/userStore'
import { useTranslation } from 'react-i18next'
import { useHistory, useLocation } from 'react-router-dom'

function UserAvatar() {
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
        <DropDown
            header={
                <IconButton>
                    <Avatar
                        src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3517629023,609603298&fm=26&gp=0.jpg"
                        style={{ width: 40, height: 40 }}
                    >
                        T
                    </Avatar>
                </IconButton>
            }
            onSelect={handleSelect}
        >
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

export default UserAvatar
