import React from 'react'
import ButtonLink from '@/components/ButtonLink'
import { IconButton } from '@material-ui/core'
import { Search as SearchIcon } from '@material-ui/icons'

function SearchLink() {
    return (
        <ButtonLink component={IconButton} to="/search">
            <SearchIcon fontSize="medium" />
        </ButtonLink>
    )
}

export default SearchLink
