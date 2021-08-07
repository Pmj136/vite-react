import React from 'react'
import { Avatar, IconButton } from '@material-ui/core'
import { Trans } from 'react-i18next'
import DropDown from '@/components/DropDown/DropDown'
import DropDownItem from '@/components/DropDown/DropDownItem'
import { useHistory } from 'react-router-dom'
import userStore from '@/store/userStore'

function UserAvatar() {
    const { logout } = userStore
    const history = useHistory()
    const handleSelect = (command: string) => {
        if (command === 'exit') {
            logout.call(userStore)
        } else {
            history.push(command)
        }
    }
    return (
        <DropDown
            selectedCommand={history.location.pathname}
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
            <DropDownItem command="/profile">
                <Trans>header.userDropDown.profile</Trans>
            </DropDownItem>
            <DropDownItem command="/account">
                <Trans>header.userDropDown.account</Trans>
            </DropDownItem>
            <DropDownItem command="exit">
                <Trans>header.userDropDown.exit</Trans>
            </DropDownItem>
        </DropDown>
    )
}

export default UserAvatar
