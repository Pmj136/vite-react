import React, { ReactElement, useMemo } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import generateTheme from './themes'
import { observer } from 'mobx-react-lite'
import state from '@/store/appStore'

// import { blue, cyan } from '@material-ui/core/colors';

interface IProps {
    children: ReactElement
}

function ThemeDriver(props: IProps) {
    const themeKey = state.theme
    document.body.setAttribute('data-theme', themeKey)
    const theme = useMemo(() => generateTheme(themeKey), [themeKey])
    return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
}

export default observer(ThemeDriver)
