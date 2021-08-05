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
            header={
                <IconButton>
                    <Avatar
                        src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3517629023,609603298&fm=26&gp=0.jpg"
                        style={{ width: 40, height: 40 }}
                    />
                </IconButton>
            }
            dropDownItems={dropDownItems}
            onSelect={v => {
                console.log(v)
            }}
        />
    )
}

export default UserAvatar
