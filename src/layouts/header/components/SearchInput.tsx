import React, { useState } from 'react'
import { Input, InputAdornment } from '@material-ui/core'
import { Search as SearchIcon } from '@material-ui/icons'
import { useHistory } from 'react-router-dom'

function SearchInput() {
    const [width, setWidth] = useState(120)
    const [keyword, setKeyword] = useState('')

    const history = useHistory()
    const handleKeyDown = (e: any) => {
        if (e.code === 'Enter') {
            let jump = history.push
            if (history.location.pathname === '/search') jump = history.replace
            jump({
                pathname: '/search',
                state: keyword,
            })
        }
    }
    return (
        <Input
            value={keyword}
            type="search"
            style={{
                width,
                transition: 'width ease-out 0.2s',
                marginRight: 16,
            }}
            placeholder={width === 120 ? '搜索' : '按回车键搜索'}
            startAdornment={
                <InputAdornment position="start">
                    <SearchIcon />
                </InputAdornment>
            }
            onFocus={() => setWidth(200)}
            onBlur={() => setWidth(120)}
            onKeyDown={handleKeyDown}
            onChange={e => setKeyword(e.target.value)}
        />
    )
}

export default SearchInput
