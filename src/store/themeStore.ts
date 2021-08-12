import { makeAutoObservable } from 'mobx'

export default makeAutoObservable({
    theme: 'light',
    setTheme(theme: 'light' | 'dark') {
        this.theme = theme
    },
})
