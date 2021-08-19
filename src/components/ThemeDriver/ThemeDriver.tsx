import React, { ReactElement } from 'react'
import { ThemeProvider } from '@material-ui/core'
import { light as lightTheme, dark as darkTheme } from './themes'
import { observer } from 'mobx-react-lite'
import state from '@/store/appStore'

// import { blue, cyan } from '@material-ui/core/colors';

interface IProps {
    children: ReactElement
}

function ThemeDriver(props: IProps) {
    const theme = state.theme
    document.body.setAttribute('data-theme', theme)
    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            {props.children}
        </ThemeProvider>
    )
}

export default observer(ThemeDriver)
