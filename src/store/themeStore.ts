import { makeAutoObservable } from 'mobx'
import { StorageThemeKey } from '@/utils/constants'
import { get, set } from '@/utils/storage'

export default makeAutoObservable({
    theme: get(StorageThemeKey, 'light'),
    setTheme(theme: 'light' | 'dark') {
        this.theme = theme
        set(StorageThemeKey, theme)
    },
})
