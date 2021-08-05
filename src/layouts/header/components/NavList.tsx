import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import classes from '../styles/nav.module.css'
import NavListItem from '@/layouts/header/components/NavListItem'
import { useTranslation } from 'react-i18next'
import { Box } from '@material-ui/core'

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
                title={t('header.nav.about')}
                path="/about"
                activePath={activeRoute}
            />
        </nav>
    )
}

export default NavList
