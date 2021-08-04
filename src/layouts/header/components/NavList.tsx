import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Button } from '@material-ui/core'

function NavList() {
    return (
        <nav>
            <Button color="primary" component={RouterLink} to="/home">
                首页
            </Button>
            <Button color="primary" component={RouterLink} to="/about">
                关于
            </Button>
        </nav>
    )
}

export default NavList
