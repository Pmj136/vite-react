import React from 'react'
import { GitHub as GithubIcon } from '@material-ui/icons'
import { IconButton } from '@material-ui/core'

function GithubLink() {
    const toGithub = () => {
        window.open('https://baidu.com')
    }
    return (
        <IconButton onClick={toGithub}>
            <GithubIcon color="action" fontSize="medium" />
        </IconButton>
    )
}

export default GithubLink
