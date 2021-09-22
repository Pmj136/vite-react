import React, { CSSProperties, useEffect, useRef, useState } from 'react'
import { Backdrop, styled } from '@mui/material'
import type { Property } from 'csstype'

interface IProps {
    className?: string
    style?: CSSProperties
    size?: number
    view?: boolean
    src: string
    alt?: string
    fit?: Property.ObjectFit
}

const Img = styled('img')({
    width: '100%',
    height: '100%',
})

function Image({
    view = true,
    size = 200,
    src,
    alt,
    fit = 'fill',
    ...others
}: IProps) {
    const [viewVisible, setViewVisible] = useState(false)
    const imgRef = useRef<any>(null)
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
        setViewVisible(false)
        document.body.removeAttribute('style')
    }
    const onWheel = (e: any) => {
        const direction = e.nativeEvent.wheelDelta
        let scale = imgRef.current?.style.transform || 'scale(1)'
        scale = scale.replace(/^scale\((.*)\)$/, '$1')
        if (direction > 0) {
            if (scale >= 5.5) return
            scale = +scale + 0.3
        } else {
            if (scale <= 0.5) return
            scale = +scale - 0.3
        }
        imgRef.current.style.transform = `scale(${scale})`
    }
    return (
        <>
            <img
                src={src}
                alt={alt}
                onClick={handleClick}
                style={{ width: size, height: size, objectFit: fit }}
                {...others}
            />
            {view && (
                <Backdrop
                    open={viewVisible}
                    onClick={closeMask}
                    onWheel={onWheel}
                >
                    {viewVisible && (
                        <img
                            ref={imgRef}
                            alt={alt}
                            src={src}
                            onClick={handleClick}
                            style={{
                                width: size,
                                height: size,
                                transition: 'transform linear 0.2s',
                                objectFit: 'contain',
                            }}
                        />
                    )}
                </Backdrop>
            )}
        </>
    )
}

export default Image
