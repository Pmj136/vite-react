import React from 'react'
import { CircularProgress } from '@mui/material'

function Loading() {
    return (
        <div
            style={{
                flex: 1,
                height: 470,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <CircularProgress color="inherit" />
        </div>
    )
}

export default Loading
