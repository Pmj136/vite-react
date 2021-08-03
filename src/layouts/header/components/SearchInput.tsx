import React from 'react'
import { Input, InputAdornment } from '@material-ui/core'
import { Search as SearchIcon } from '@material-ui/icons'

interface IProps {}

function SearchInput(props: IProps) {
    return (
        <Input
            placeholder="输入关键字搜索"
            startAdornment={
                <InputAdornment position="start">
                    <SearchIcon />
                </InputAdornment>
            }
        />
    )
}

export default SearchInput
