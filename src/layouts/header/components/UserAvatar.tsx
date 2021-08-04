import React from 'react'
import { Avatar, IconButton } from '@material-ui/core'
import DropDown, { DropDownItem } from '@/components/DropDown'
import { useTranslation } from 'react-i18next'

interface IProps {}

function UserAvatar(props: IProps) {
    const { t } = useTranslation()
    const dropDownItems: Array<DropDownItem> = [
        {
            command: 'zh',
            name: t('header.userDropDown.homePage'),
        },
        {
            command: 'en',
            name: t('header.userDropDown.myNews'),
        },
        {
            command: '2',
            name: t('header.userDropDown.accountManage'),
        },
        {
            command: '1',
            name: t('header.userDropDown.exit'),
        },
    ]
    return (
        <DropDown
            disableHistory
            top={
                <IconButton>
                    <Avatar style={{ width: 40, height: 40 }}>头</Avatar>
                </IconButton>
            }
            dropDownItems={dropDownItems}
            onSelect={() => {
                console.log(1)
            }}
        />
    )
}

export default UserAvatar
