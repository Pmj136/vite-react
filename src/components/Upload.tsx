import React, { ReactElement, useRef } from 'react'
import type { CSSProperties } from 'react'

interface IProps {
    multiple?: boolean
    children: ReactElement
    onSelect?: (files: FileList | File) => void
    className?: string
    style?: CSSProperties
}

function Upload({ multiple = false, children, onSelect, ...others }: IProps) {
    const fileRef = useRef<HTMLInputElement>(null)
    const handleClick = () => {
        const el = fileRef.current as HTMLInputElement
        el.value = ''
        el.click()
    }
    return (
        <div onClick={handleClick} {...others}>
            {children}
            <input
                type="file"
                ref={fileRef}
                style={{ display: 'none' }}
                multiple={multiple}
                onChange={e => {
                    const files: FileList = e.target.files as FileList
                    if (multiple) {
                        onSelect && onSelect(files)
                    } else {
                        onSelect && onSelect(files[0])
                    }
                }}
            />
        </div>
    )
}

export default Upload
