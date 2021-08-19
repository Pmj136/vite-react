import React, { createElement } from 'react'
import { Brightness7Outlined, Brightness4Outlined } from '@material-ui/icons'
import { IconButton } from '@material-ui/core'
import { observer } from 'mobx-react-lite'
import state, { setTheme } from '@/store/appStore'

function ThemeSwitch() {
    const toggleTheme = () => {
        const targetTheme = state.theme === 'light' ? 'dark' : 'light'
        setTheme(targetTheme)
        document.body.setAttribute('data-theme', targetTheme)
    }
    return (
        <IconButton onClick={toggleTheme}>
            {createElement(
                state.theme === 'light'
                    ? Brightness4Outlined
                    : Brightness7Outlined,
                {
                    color: 'action',
                }
            )}
        </IconButton>
    )
}

export default observer(ThemeSwitch)
