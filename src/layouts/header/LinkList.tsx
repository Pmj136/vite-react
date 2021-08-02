import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Link } from '@material-ui/core'

function LinkList() {
    return (
        <>
            <Link component={RouterLink} to="/home">
                首页
            </Link>
            <Link component={RouterLink} to="/about" color="secondary">
                关于
            </Link>
        </>
    )
}

export default LinkList
