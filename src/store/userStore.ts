import { observable, runInAction } from 'mobx'
import { get, remove, set } from '@/utils/storage'

import { StorageInfoKey } from '@/utils/constants'

const state = observable({
    uId: 0,
    info: get(StorageInfoKey, null),
    get isLogin() {
        return this.info?.isLogin
    },
})

export default state

export function savaUser(data: { info?: any; uId: number }) {
    runInAction(() => {
        state.uId = data.uId
        if (data.info) {
            state.info = data.info
        }
    })
    if (data.info) {
        set(StorageInfoKey, data.info)
    }
}

export function reset() {
    runInAction(() => {
        state.info = null
        state.uId = 0
    })
    remove(StorageInfoKey)
}
