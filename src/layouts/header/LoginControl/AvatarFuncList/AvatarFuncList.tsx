import React from 'react'
import DropDown from '@/components/DropDown/DropDown'
import DropDownItem from '@/components/DropDown/DropDownItem'
import DropDownLinkItem from '@/components/DropDown/DropDownLinkItem'
import UserAvatar from './UserAvatar'
import { useLocation } from 'react-router-dom'
import { observer } from 'mobx-react-lite'

import state, { reset } from '@/store/userStore'
import { Typography } from '@material-ui/core'
import { toast } from 'react-hot-toast'
import { logoutApi } from '@/api/user'

function AvatarFuncList() {
    const location = useLocation()
    const { info, uId } = state
    const exitSys = () => {
        toast.loading('正在退出', {
            id: 'exit-toast-id',
        })
        const timer = setTimeout(() => {
            logoutApi()
                .then(() => {
                    toast.success('你已退出')
                    reset()
                    history.go(0)
                    clearTimeout(timer)
                })
                .finally(() => {
                    toast.dismiss('exit-toast-id')
                })
        }, 500)
    }
    return (
        <DropDown header={<UserAvatar url={info.avatarUrl} />}>
            <DropDownLinkItem
                active={location.pathname.includes('/user')}
                to={'/user/' + uId + '/dynamic'}
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
