import React, { CSSProperties, useState } from 'react'
import { Backdrop, styled } from '@mui/material'
import type { Property } from 'csstype'

interface IProps {
    className?: string
    style?: CSSProperties
    view?: boolean
    src: string
    alt?: string
    fit?: Property.ObjectFit
}

const Root = styled('div')({
    width: 200,
    height: 200,
})
const Img = styled('img')({
    width: '100%',
    height: '100%',
})

function Image({ view = true, src, alt, fit = 'fill', ...others }: IProps) {
    const [viewVisible, setViewVisible] = useState(false)
    const handleClick = (e: any) => {
        e.stopPropagation()
        if (view) {
            document.body.setAttribute(
                'style',
                'padding-right:12px;overflow:hidden'
            )
            setViewVisible(true)
        }
    }
    const closeMask = (e: any) => {
        e.stopPropagation()
        //
        setViewVisible(false)
        document.body.removeAttribute('style')
    }
    return (
        <Root {...others}>
            <Img src={src} onClick={handleClick} style={{ objectFit: fit }} />
            <Backdrop
                style={{ zIndex: 1200 }}
                open={viewVisible}
                onClick={closeMask}
            >
                <Img
                    alt={alt}
                    src={src}
                    onClick={handleClick}
                    style={{ width: '85vh', objectFit: 'contain' }}
                />
            </Backdrop>
        </Root>
    )
}

export default Image
