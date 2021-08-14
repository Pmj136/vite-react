import React from 'react'
import ButtonLink from '@/components/ButtonLink'
import { Box, Button } from '@material-ui/core'

import classes from './_.module.css'

function NavLink() {
    return (
        <nav className={classes['nav']}>
            <ButtonLink component={Button} to="/">
                首页
            </ButtonLink>
            <Box m={1} />
            <ButtonLink component={Button} to="/post">
                帖子
            </ButtonLink>
            <Box m={1} />
            <ButtonLink component={Button} to="/about">
                关于作者
            </ButtonLink>
        </nav>
    )
}

export default NavLink
