import { authApi } from '@/api/user'
import { setInfo, clearInfo } from '@/store/userStore'

export default function () {
    authApi()
        .then(res => {
            setInfo(res.data)
        })
        .catch(e => {
            if (e.error !== undefined && e.error > 0) {
                clearInfo()
            }
        })
}
