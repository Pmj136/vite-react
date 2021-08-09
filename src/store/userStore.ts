import { makeAutoObservable, runInAction } from 'mobx'
import { get, remove, set } from '@/utils/storage'
import { toast } from 'react-hot-toast'
import { loginApi, logoutApi } from '@/api/user'

class Store {
    isLogin = get('isLogin', false)

    constructor() {
        makeAutoObservable(this)
    }

    async login(e: any) {
        try {
            await loginApi(e)
            runInAction(() => {
                this.isLogin = true
            })
            set('isLogin', true)
            return Promise.resolve()
        } catch (e) {
            console.log(e)
        }
    }

    logout() {
        toast.loading('正在退出', {
            id: 'exit-toast-id',
        })
        const timer = setTimeout(() => {
            logoutApi().then(res => {
                toast.dismiss('exit-toast-id')
                toast.success('你已退出')
                runInAction(() => {
                    this.isLogin = false
                })
                remove('isLogin')
                clearTimeout(timer)
            })
        }, 500)
    }
}

export default new Store()
