import { makeAutoObservable } from 'mobx'
import { get, remove, set } from '@/utils/storage'
import { toast } from 'react-hot-toast'

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

    login() {
        return new Promise<void>(resolve => {
            toast.loading('正在登录')
            testApi().then(() => {
                toast.dismiss()
                toast.success('登录成功')
                this.isLogin = true
                set('isLogin', true)
                resolve()
            })
        })
    }

    logout() {
        toast.loading('正在退出')
        testApi(1000).then(() => {
            toast.dismiss()
            toast.success('你已退出')
            this.isLogin = false
            remove('isLogin')
        })
    }
}

export default new Store()
