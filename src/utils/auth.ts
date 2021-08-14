import { authApi } from '@/api/user'
import Cookie from 'js-cookie'
import userStore from '@/store/userStore'

export default function () {
    authApi()
        .then(res => {
            userStore.setUId(res.data.uId)
        })
        .catch(e => {
            if (e.code !== undefined) {
                Cookie.remove('token')
                userStore.reset()
            }
        })
}
