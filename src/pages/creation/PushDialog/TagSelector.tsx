import React, { useEffect, useState } from 'react'
import { Autocomplete } from '@material-ui/lab'
import { TextField } from '@material-ui/core'
import { addTagApi, getTagsApi } from '@/api/articleTag'
import { useDebouncedCallback } from 'use-debounce'

interface OptionType {
    id: number
    name: string
}

interface IProps {
    value: OptionType
    onChange: (newState: { tagId: number; tagName: string }) => void
}

const hasItem = (raw: OptionType[], k: string) => {
    for (const v of raw) {
        if (v.name === k) return true
    }
    return false
}

function TagSelector(props: IProps) {
    const [isLoading, setIsLoading] = useState(false)
    const [options, setOptions] = useState<OptionType[]>([])
    //防抖搜索 tag
    const searchTags = useDebouncedCallback((value: string) => {
        getTagsApi(value)
            .then(res => {
                const arr = res.data
                if (!hasItem(res.data, value)) {
                    arr.unshift({ id: 0, name: value })
                }
                setOptions(arr)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, 500)
    useEffect(() => {
        if (props.value.id !== 0) {
            setOptions([props.value])
        }
    }, [])

    //用户输入值变化
    const handleInputChange = (e: any, value: string, reason: string) => {
        if (reason === 'reset') return
        if (value.trim() === '') {
            setOptions([])
            return
        }
        setIsLoading(true)
        searchTags(value)
    }
    //用户选中变化
    const handleChange = (e: any, state: any) => {
        if (state != null) {
            const tagName = state.name
            if (state.id !== 0) {
                props.onChange({ tagId: state.id, tagName })
            } else {
                addTagApi({ name: state.name }).then(res => {
                    props.onChange({ tagId: res.data, tagName })
                })
            }
        }
    }
    return (
        <Autocomplete
            selectOnFocus
            loading={isLoading}
            size="small"
            loadingText="加载中……"
            noOptionsText="输入关键词搜索"
            value={props.value}
            options={options}
            onChange={handleChange}
            filterOptions={opt => opt}
            getOptionLabel={option => option.name}
            getOptionSelected={(option, value) => {
                if (value.id === 0) return true
                return option.name === value.name
            }}
            style={{ width: 250 }}
            renderInput={params => (
                <TextField
                    {...params}
                    placeholder="请搜索添加标签"
                    variant="outlined"
                />
            )}
            onInputChange={handleInputChange}
        />
    )
}

export default TagSelector
