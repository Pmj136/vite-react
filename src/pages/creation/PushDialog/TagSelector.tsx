import React, { useEffect, useMemo, useState } from 'react'
import {
    Autocomplete,
    autocompleteClasses,
    Popper,
    TextField,
} from '@mui/material'
import { addTagApi, getTagsApi } from '@/api/articleTag'
import useDebounce from '@/hooks/useDebounce'
import { styled } from '@mui/styles'

interface OptionType {
    id: number
    name: string
}

interface IProps {
    value: OptionType
    onChange: (newState: { tagId: number; tagName: string }) => void
}

const StyledPopper = styled(Popper)({
    [`& .${autocompleteClasses.listbox}`]: {
        boxSizing: 'border-box',
        '& ul': {
            padding: 0,
            margin: 0,
        },
    },
})
const findId = (raw: OptionType[], k: string) => {
    for (const v of raw) {
        if (v.name === k) return v.id
    }
    return 0
}

function TagSelector(props: IProps) {
    const [info, setInfo] = useState(props.value)
    const [isLoading, setIsLoading] = useState(false)
    const [options, setOptions] = useState<OptionType[]>([])
    useEffect(() => {
        if (props.value.id !== 0) {
            setOptions([props.value])
        }
    }, [])

    //防抖搜索 tag
    const searchTags = (value: string) => {
        getTagsApi(value)
            .then(res => {
                const arr = res.data
                const id = findId(res.data, value)
                if (id === 0) {
                    arr.unshift({ id: 0, name: value })
                }
                setOptions(arr)
                setInfo({ id, name: value })
            })
            .finally(() => {
                setIsLoading(false)
            })
    }
    //用户输入值变化
    const handleInputChange = useDebounce(
        (e: any, value: string, reason: string) => {
            if (reason === 'reset') return
            if (reason === 'clear') {
                setOptions([])
                return
            }
            setIsLoading(true)
            searchTags(value)
        },
        500
    )
    //用户选中变化
    const handleChange = (e: any, state: any) => {
        if (state != null) {
            const tagName = state.name
            let info
            if (state.id > 0) {
                info = { id: state.id, name: tagName }
                setOptions([info])
                setInfo(info)
                props.onChange({ tagId: state.id, tagName })
            } else {
                addTagApi({ name: state.name }).then(res => {
                    props.onChange({ tagId: res.data, tagName })
                    info = { id: res.data, name: tagName }
                    setOptions([info])
                    setInfo(info)
                })
            }
        } else {
            setInfo({ id: 0, name: '' })
            props.onChange({ tagId: 0, tagName: '' })
        }
    }
    return useMemo(
        () => (
            <Autocomplete
                disablePortal
                selectOnFocus
                loading={isLoading}
                size="small"
                loadingText="加载中……"
                noOptionsText="输入关键词搜索"
                value={info}
                options={options}
                onChange={handleChange}
                filterOptions={opt => opt}
                getOptionLabel={option => option.name}
                isOptionEqualToValue={(option, value) => {
                    if (option.id === 0) return true
                    return option.name === value.name
                }}
                PopperComponent={StyledPopper}
                sx={{ width: 250 }}
                renderInput={params => (
                    <TextField
                        {...params}
                        placeholder="添加文章标签"
                        variant="outlined"
                    />
                )}
                renderOption={(props1, option, state) => {
                    return (
                        <li {...props1}>
                            {option.id === 0 ? (
                                <span>{option.name}（点击新增）</span>
                            ) : (
                                <span>{option.name}</span>
                            )}
                        </li>
                    )
                }}
                onInputChange={handleInputChange}
            />
        ),
        [info, isLoading, options]
    )
}

export default TagSelector
