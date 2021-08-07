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
                toastOptions={{
                    style: {
                        borderRadius: 4,
                        // 'box-shadow': '0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d',
                    },
                }}
            />
        </CssBaseline>
    )
}

export default App
