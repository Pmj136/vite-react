import React from 'react'
import { IconButton } from '@material-ui/core'
import { Search as SearchIcon } from '@material-ui/icons'
import { useTranslation } from 'react-i18next'

interface IProps {}

function SearchInput(props: IProps) {
    const { t } = useTranslation()
    return (
        <IconButton>
            <SearchIcon color="action" fontSize="medium" />
        </IconButton>
    )
    // return (
    //     <Input
    //         style={{ width: 140, marginRight: 16 }}
    //         placeholder={t('header.searchPlaceholder')}
    //         startAdornment={
    //             <InputAdornment position="start">
    //                 <SearchIcon />
    //             </InputAdornment>
    //         }
    //     />
    // )
}

export default SearchInput
