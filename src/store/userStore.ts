import { makeAutoObservable } from 'mobx'

class Store {
    isLogin = false

    constructor() {
        makeAutoObservable(this)
    }

    setLoginStatus(status: boolean) {
        this.isLogin = status
    }
}

export default new Store()
