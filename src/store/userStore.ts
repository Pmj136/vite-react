import { makeAutoObservable } from 'mobx'
import { get, set } from '@/utils/storage'

class Store {
    isLogin = get('isLogin', false)

    constructor() {
        makeAutoObservable(this)
    }

    setLoginStatus(status: boolean) {
        set('isLogin', status)
        this.isLogin = status
    }
}

export default new Store()
