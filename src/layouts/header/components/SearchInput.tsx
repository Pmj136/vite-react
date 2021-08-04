import React, { useState } from 'react'
import { IconButton, Input, InputAdornment } from '@material-ui/core'
import { Search as SearchIcon } from '@material-ui/icons'
import { useTranslation } from 'react-i18next'

interface IProps {}

function SearchInput(props: IProps) {
    const { t } = useTranslation()
    return (
        <Input
            style={{ width: 140 }}
            placeholder={t('header.searchPlaceholder')}
            startAdornment={
                <InputAdornment position="start">
                    <SearchIcon />
                </InputAdornment>
            }
        />
    )
}

export default SearchInput
