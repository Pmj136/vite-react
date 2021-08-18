import { makeAutoObservable } from 'mobx'
import { StorageThemeKey } from '@/utils/constants'
import { get, set } from '@/utils/storage'

export default makeAutoObservable({
    //主题
    theme: get(StorageThemeKey, 'light'),
    setTheme(theme: 'light' | 'dark') {
        this.theme = theme
        set(StorageThemeKey, theme)
    },
    //登录弹窗可见性
    loginFormVisible: false,
    setLoginFormVisible(visible: boolean) {
        this.loginFormVisible = visible
    },
})
