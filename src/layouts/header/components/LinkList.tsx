import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Button } from '@material-ui/core'

function LinkList() {
    return (
        <>
            <Button color="primary" component={RouterLink} to="/home">
                Primary
            </Button>
            <Button color="secondary" component={RouterLink} to="/about">
                Secondary
            </Button>
        </>
    )
}

export default LinkList
