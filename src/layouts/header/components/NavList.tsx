import React from 'react'
import { useTranslation } from 'react-i18next'
import ButtonLink from '@/components/ButtonLink'
import { Box, Button } from '@material-ui/core'

import classes from '../styles/nav.module.css'

function NavList() {
    const { t } = useTranslation()
    return (
        <nav className={classes['nav']}>
            <ButtonLink component={Button} to="/">
                {t('header.nav.home')}
            </ButtonLink>
            <Box m={1} />
            <ButtonLink component={Button} to="/post">
                {t('header.nav.post')}
            </ButtonLink>
            <Box m={1} />
            <ButtonLink component={Button} to="/about">
                {t('header.nav.about')}
            </ButtonLink>
        </nav>
    )
}

export default NavList
