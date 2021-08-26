import React, { ReactElement, useRef } from 'react'
import type { CSSProperties } from 'react'

interface IProps {
    accept?: string
    multiple?: boolean
    className?: string
    style?: CSSProperties
    children: ReactElement
    onComplete?: (files: FileList | File) => void
}

function UploadArea({
    accept = 'image/*',
    multiple = false,
    children,
    onComplete,
    ...others
}: IProps) {
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
                accept={accept}
                type="file"
                ref={fileRef}
                style={{ display: 'none' }}
                onChange={e => {
                    const files: FileList = e.target.files as FileList
                    if (multiple) {
                        onComplete && onComplete(files)
                    } else {
                        onComplete && onComplete(files[0])
                    }
                }}
            />
        </div>
    )
}

export default UploadArea
