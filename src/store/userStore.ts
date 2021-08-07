import { makeAutoObservable, runInAction } from 'mobx'
import { get, remove, set } from '@/utils/storage'
import { toast } from 'react-hot-toast'
import { loginApi } from '@/api/user'

function testApi(time = 1000) {
    return new Promise<void>(resolve => {
        setTimeout(() => {
            resolve()
        }, time)
    })
}

class Store {
    isLogin = get('isLogin', false)

    constructor() {
        makeAutoObservable(this)
    }

    async login(e: any) {
        try {
            await loginApi(e)
            toast.success('登录成功')
            runInAction(() => {
                this.isLogin = true
            })
            set('isLogin', true)
            return Promise.resolve()
        } catch (e) {
            return Promise.reject(e)
        }
    }

    logout() {
        toast.loading('正在退出')
        testApi(1000).then(() => {
            toast.dismiss()
            toast.success('你已退出')
            runInAction(() => {
                this.isLogin = false
            })
            remove('isLogin')
        })
    }
}

export default new Store()
