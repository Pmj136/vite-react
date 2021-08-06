import { makeAutoObservable } from 'mobx'

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
