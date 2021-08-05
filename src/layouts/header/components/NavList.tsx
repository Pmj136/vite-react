import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import NavListItem from './NavListItem'
import { useTranslation } from 'react-i18next'
import { Box } from '@material-ui/core'

import classes from '../styles/nav.module.css'

function NavList() {
    const { t } = useTranslation()

    const location = useLocation()
    const [activeRoute, setActiveRoute] = useState(location.pathname)

    useEffect(() => {
        setActiveRoute(location.pathname)
    }, [location.pathname])
    return (
        <nav className={classes['nav']}>
            <NavListItem
                title={t('header.nav.home')}
                path="/"
                activePath={activeRoute}
            />
            <Box m={1} />
            <NavListItem
                title={t('header.nav.post')}
                path="/post"
                activePath={activeRoute}
            />
            <Box m={1} />
            <NavListItem
                title={t('header.nav.about')}
                path="/about"
                activePath={activeRoute}
            />
        </nav>
    )
}

export default NavList
