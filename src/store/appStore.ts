import { observable, runInAction } from 'mobx'
import { StorageThemeKey } from '@/utils/constants'
import { get, set } from '@/utils/storage'

const state = observable({
    theme: get(StorageThemeKey, 'light'), //主题
    loginDialogVisible: false, //登录弹窗可见性
})

export default state

export function setTheme(theme: 'light' | 'dark') {
    runInAction(() => {
        state.theme = theme
    })
    set(StorageThemeKey, theme)
}

export function setLoginDialogVisible(visible: boolean) {
    runInAction(() => {
        state.loginDialogVisible = visible
    })
}
