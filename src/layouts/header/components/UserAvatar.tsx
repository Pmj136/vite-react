import React from 'react'
import { Avatar, IconButton } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import DropDown from '@/components/DropDown/DropDown'
import DropDownItem from '@/components/DropDown/DropDownItem'

function UserAvatar() {
    const { t } = useTranslation()
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
            onSelect={v => {
                console.log(v)
            }}
        >
            <DropDownItem command="1">
                {t('header.userDropDown.homePage')}
            </DropDownItem>
            <DropDownItem command="2">
                {t('header.userDropDown.accountManage')}
            </DropDownItem>
            <DropDownItem command="3">
                {t('header.userDropDown.exit')}
            </DropDownItem>
        </DropDown>
    )
}

export default UserAvatar
