import React from 'react'
import { Trans } from 'react-i18next'
import ButtonLink from '@/components/ButtonLink'
import { Box, Button } from '@material-ui/core'

import classes from '../styles/nav.module.css'

function NavList() {
    return (
        <nav className={classes['nav']}>
            <ButtonLink component={Button} to="/">
                <Trans>header.nav.home</Trans>
            </ButtonLink>
            <Box m={1} />
            <ButtonLink component={Button} to="/post">
                <Trans>header.nav.post</Trans>
            </ButtonLink>
            <Box m={1} />
            <ButtonLink component={Button} to="/about">
                <Trans>header.nav.about</Trans>
            </ButtonLink>
        </nav>
    )
}

export default NavList
