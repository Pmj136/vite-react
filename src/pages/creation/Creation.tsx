import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import RichText from './RichText/RichText'
import MarkDown from './MarkDown/MarkDown'

function Creation() {
    return (
        <Switch>
            <Route exact path="/creation/rt" component={RichText} />
            <Route exact path="/creation/md" component={MarkDown} />
            <Redirect path="*" to="/" />
        </Switch>
    )
}

export default Creation
