import { observable, runInAction } from 'mobx'

import { TokenKey } from '@/utils/constants'
import Cookies from 'js-cookie'

interface Info {
    id: number
    avatarUrl: string
}

const state: { info: Info; isLogin: boolean } = observable({
    info: {
        id: 0,
        avatarUrl: '',
    },
    isLogin: Cookies.get(TokenKey) !== undefined,
})

export default state

export function setInfo(data: Info) {
    runInAction(() => {
        state.info = data
    })
}

export function clearInfo() {
    runInAction(() => {
        state.info = {
            id: 0,
            avatarUrl: '',
        }
        state.isLogin = false
    })
    Cookies.remove(TokenKey)
}
