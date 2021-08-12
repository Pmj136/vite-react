import { authApi } from '@/api/app'
import Cookie from 'js-cookie'
import userStore from '@/store/userStore'
import { has } from '@/utils/storage'
import { StorageInfoKey } from '@/utils/constants'

function doAuth() {
    authApi().catch(() => {
        Cookie.remove('token')
        userStore.reset()
    })
}

export default function () {
    const hasToken = Cookie.get('token')
    if (hasToken) {
        doAuth()
    } else {
        const hasInfo = has(StorageInfoKey)
        if (hasInfo) {
            doAuth()
        }
    }
}
