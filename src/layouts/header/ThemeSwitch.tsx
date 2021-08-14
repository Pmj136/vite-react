import React, { createElement } from 'react'
import { Brightness7Outlined, Brightness4Outlined } from '@material-ui/icons'
import { IconButton } from '@material-ui/core'
import { observer } from 'mobx-react-lite'
import appStore from '@/store/appStore'

function ThemeSwitch() {
    const { theme, setTheme } = appStore
    const toggleTheme = () => {
        const targetTheme = theme === 'light' ? 'dark' : 'light'
        setTheme.call(appStore, targetTheme)
        document.body.setAttribute('data-theme', targetTheme)
    }
    return (
        <IconButton onClick={toggleTheme}>
            {createElement(
                theme === 'light' ? Brightness4Outlined : Brightness7Outlined,
                {
                    color: 'action',
                }
            )}
        </IconButton>
    )
}

export default observer(ThemeSwitch)
