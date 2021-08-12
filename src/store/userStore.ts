import { makeAutoObservable, runInAction } from 'mobx'
import { get, remove, set } from '@/utils/storage'
import { toast } from 'react-hot-toast'
import { loginApi, logoutApi } from '@/api/user'

export default makeAutoObservable({
    // isLogin: get('isLogin', false),
    info: get('c_user', null),
    get isLogin() {
        return this.info?.isLogin
    },
    reset() {
        runInAction(() => {
            this.info = null
        })
        remove('c_user')
    },
    async login(e: any) {
        try {
            const res = await loginApi(e)
            runInAction(() => {
                this.info = res.data
            })
            set('c_user', res.data)
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
