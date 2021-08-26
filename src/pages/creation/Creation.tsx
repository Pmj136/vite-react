import React from 'react'
import { Redirect, Switch } from 'react-router-dom'
import RichText from './RichText/RichText'
import MarkDown from './MarkDown/MarkDown'
import AuthRoute from '@/router/AuthRoute'

function Creation() {
    return (
        <Switch>
            <AuthRoute
                authRedirect
                exact
                path="/creation/rt"
                component={RichText}
            />
            <AuthRoute
                authRedirect
                exact
                path="/creation/md"
                component={MarkDown}
            />
            <Redirect path="*" to="/" />
        </Switch>
    )
}

export default Creation
