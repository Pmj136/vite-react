import { authApi } from '@/api/app'
import Cookie from 'js-cookie'
import userStore from '@/store/userStore'

export default function () {
    const hasToken = Cookie.get('token')
    if (hasToken) {
        authApi().catch(() => {
            Cookie.remove('token')
            userStore.reset()
        })
    }
}
