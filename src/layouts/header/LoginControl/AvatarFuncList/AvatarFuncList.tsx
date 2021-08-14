import React from 'react'
import DropDown from '@/components/DropDown/DropDown'
import DropDownItem from '@/components/DropDown/DropDownItem'
import DropDownLinkItem from '@/components/DropDown/DropDownLinkItem'
import UserAvatar from './UserAvatar'
import { useLocation } from 'react-router-dom'
import { observer } from 'mobx-react-lite'

import userStore from '@/store/userStore'
import { Typography } from '@material-ui/core'

function AvatarFuncList() {
    const { logout, info, uId } = userStore
    const location = useLocation()
    const exitSys = () => {
        logout.call(userStore)
    }
    return (
        <DropDown header={<UserAvatar url={info.avatarUrl} />}>
            <DropDownLinkItem
                active={location.pathname.includes('/user')}
                to={'/user/' + uId}
            >
                <Typography variant="body2">我的主页</Typography>
            </DropDownLinkItem>
            <DropDownLinkItem
                active={location.pathname.includes('/setting')}
                to="/setting/profile"
            >
                <Typography variant="body2">设置</Typography>
            </DropDownLinkItem>
            <DropDownItem onClick={exitSys}>
                <Typography variant="body2">退出</Typography>
            </DropDownItem>
        </DropDown>
    )
}

export default observer(AvatarFuncList)
