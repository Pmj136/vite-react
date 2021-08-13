import React from 'react'
import ButtonLink from '@/components/ButtonLink'
import { Box, Button, Typography } from '@material-ui/core'

import classes from './_.module.css'

function NavLink() {
    return (
        <nav className={classes['nav']}>
            <ButtonLink component={Button} to="/">
                <Typography>首页</Typography>
            </ButtonLink>
            <Box m={1} />
            <ButtonLink component={Button} to="/post">
                <Typography>帖子</Typography>
            </ButtonLink>
            <Box m={1} />
            <ButtonLink component={Button} to="/about">
                <Typography>关于作者</Typography>
            </ButtonLink>
        </nav>
    )
}

export default NavLink
