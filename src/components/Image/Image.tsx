import React, { CSSProperties, useRef, useState } from 'react'
import { Backdrop } from '@mui/material'
import type { Property } from 'csstype'
import { makeStyles } from '@mui/styles'

interface IProps {
    className?: string
    style?: CSSProperties
    size?: number
    view?: boolean
    src: string
    alt?: string
    fit?: Property.ObjectFit
}

const userStyles = makeStyles({
    img: {
        userSelect: 'none',
        borderRadius: 2,
    },
    reviewImg: {
        transition: 'transform linear 0.2s',
        objectFit: 'contain',
        userSelect: 'none',
        borderRadius: 2,
    },
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
    const classes = userStyles()
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
            if (scale >= 3) return
            scale = +scale + 0.25
        } else {
            if (scale <= 0.5) return
            scale = +scale - 0.25
        }
        imgRef.current.style.transform = `scale(${scale})`
    }
    return (
        <>
            <img
                src={src}
                alt={alt}
                onClick={handleClick}
                className={classes.img}
                style={{
                    width: size,
                    height: size,
                    objectFit: fit,
                }}
                {...others}
            />
            {view && (
                <Backdrop
                    open={viewVisible}
                    onClick={closeMask}
                    onWheel={onWheel}
                    style={{ cursor: 'zoom-in' }}
                >
                    {viewVisible && (
                        <img
                            ref={imgRef}
                            alt={alt}
                            src={src}
                            onClick={handleClick}
                            className={classes.reviewImg}
                            style={{
                                width: size * 2,
                                height: size * 2,
                            }}
                        />
                    )}
                </Backdrop>
            )}
        </>
    )
}

export default Image
