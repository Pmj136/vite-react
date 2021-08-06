import React, { createElement } from 'react'
import { Brightness7Outlined, Brightness4Outlined } from '@material-ui/icons'
import { IconButton, Tooltip } from '@material-ui/core'
import ThemeStore from '@/store/themeStore'
import { observer } from 'mobx-react-lite'

function ThemeSwitch() {
    const { theme, setTheme } = ThemeStore
    const toggleTheme = () => {
        const targetTheme = theme === 'light' ? 'dark' : 'light'
        setTheme.bind(ThemeStore)(targetTheme)
        document.body.setAttribute('data-theme', targetTheme)
    }
    return (
        <IconButton onClick={toggleTheme}>
            <Tooltip
                title={theme === 'light' ? '切换为dark模式' : '切换为light模式'}
            >
                {createElement(
                    theme === 'light'
                        ? Brightness4Outlined
                        : Brightness7Outlined,
                    {
                        color: 'action',
                    }
                )}
            </Tooltip>
        </IconButton>
    )
}

export default observer(ThemeSwitch)
