import React from 'react'
import { Avatar, IconButton } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import DropDown from '@/components/DropDown/DropDown'
import DropDownItem from '@/components/DropDown/DropDownItem'
import { useHistory } from 'react-router-dom'
import userStore from '@/store/userStore'

function UserAvatar() {
    const { logout } = userStore
    const { t } = useTranslation()
    const history = useHistory()
    const handleSelect = (command: string) => {
        if (command === 'profile') {
            history.push('/profile')
        }
        if (command === 'account') {
            history.push('/account')
        }
        if (command === 'exit') {
            logout.call(userStore)
        }
    }
    return (
        <DropDown
            disableHistory
            header={
                <IconButton>
                    <Avatar
                        src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3517629023,609603298&fm=26&gp=0.jpg"
                        style={{ width: 40, height: 40 }}
                    />
                </IconButton>
            }
            onSelect={handleSelect}
        >
            <DropDownItem command="profile">
                {t('header.userDropDown.profile')}
            </DropDownItem>
            <DropDownItem command="account">
                {t('header.userDropDown.account')}
            </DropDownItem>
            <DropDownItem command="exit">
                {t('header.userDropDown.exit')}
            </DropDownItem>
        </DropDown>
    )
}

export default UserAvatar
