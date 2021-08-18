import { authApi } from '@/api/user'
import Cookie from 'js-cookie'
import userStore from '@/store/userStore'
import { has } from '@/utils/storage'
import { StorageInfoKey } from '@/utils/constants'

export default function () {
    authApi(!has(StorageInfoKey))
        .then(res => {
            userStore.savaUser(res.data)
        })
        .catch(e => {
            if (e.code !== undefined) {
                Cookie.remove('token')
                userStore.reset()
            }
        })
}
