import React, { ReactElement, useContext } from 'react'
import { ThemeProvider } from '@material-ui/core'
import { light as lightTheme, dark as darkTheme } from './themes'
import { ThemeStore } from '@/context/ThemeContext'

// import { blue, cyan } from '@material-ui/core/colors';

interface IProps {
    children: ReactElement
}

function ThemeDriver(props: IProps) {
    const { theme } = useContext(ThemeStore)
    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            {props.children}
        </ThemeProvider>
    )
}

export default ThemeDriver
