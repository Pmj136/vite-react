import { makeAutoObservable } from 'mobx'
import { get, set } from '@/utils/storage'

class Store {
    theme = 'light'

    constructor() {
        makeAutoObservable(this)
    }

    setTheme(theme: 'light' | 'dark') {
        this.theme = theme
    }
}

export default new Store()
