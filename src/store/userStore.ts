import { makeAutoObservable, runInAction } from 'mobx'
import { get, remove, set } from '@/utils/storage'
import { toast } from 'react-hot-toast'
import { loginApi, logoutApi } from '@/api/user'

import { StorageInfoKey } from '@/utils/constants'

export default makeAutoObservable({
    uId: 0,
    info: get(StorageInfoKey, null),
    get isLogin() {
        return this.info?.isLogin
    },
    setUId(id: number) {
        this.uId = id
    },
    reset() {
        runInAction(() => {
            this.info = null
            this.uId = 0
        })
        remove(StorageInfoKey)
    },
    async login(e: any) {
        try {
            const res = await loginApi(e)
            runInAction(() => {
                this.uId = res.data.uId
                this.info = res.data.info
            })
            set(StorageInfoKey, res.data.info)
            return Promise.resolve()
        } catch (e) {
            console.log(e)
        }
    },
    logout() {
        toast.loading('正在退出', {
            id: 'exit-toast-id',
        })
        const timer = setTimeout(() => {
            logoutApi()
                .then(() => {
                    toast.success('你已退出')
                    this.reset()
                    clearTimeout(timer)
                })
                .finally(() => {
                    toast.dismiss('exit-toast-id')
                })
        }, 500)
    },
})
