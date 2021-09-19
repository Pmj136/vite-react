import React from 'react'
import { GitHub as GithubIcon } from '@mui/icons-material'
import { IconButton } from '@mui/material'

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
