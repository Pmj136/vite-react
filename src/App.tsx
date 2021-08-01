import React from 'react'
import AppRouter from '@/router'
import ColorContext from '@/context/ColorContext'

function App() {
    return (
        <ColorContext>
            <AppRouter />
        </ColorContext>
    )
}

export default App
