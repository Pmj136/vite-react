import React from 'react'
import { Toaster } from 'react-hot-toast'
import { CssBaseline } from '@material-ui/core'
import AppRouter from '@/router'
import ThemeDriver from '@/components/ThemeDriver/ThemeDriver'

function App() {
    return (
        <CssBaseline>
            <ThemeDriver>
                <AppRouter />
            </ThemeDriver>
            <Toaster
                containerStyle={{
                    top: 70,
                }}
            />
        </CssBaseline>
    )
}

export default App
