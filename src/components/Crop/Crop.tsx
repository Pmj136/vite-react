import React, { useEffect, useRef } from 'react'
import Cropper from 'cropperjs'
import 'cropperjs/dist/cropper.css'
import styles from './_.module.css'
import { Backdrop, Button } from '@material-ui/core'

interface IProps {
    size?: number
    imgStr: string
    onClose?: () => void
    onCrop?: (evt: { file: File; dataUrl: string }) => void
}

function Crop({ imgStr, size = 400, onClose, onCrop }: IProps) {
    const imgRef = useRef<HTMLImageElement>(null)
    let cropper: any
    const handleClose = () => {
        onClose && onClose()
    }
    const handleConfirm = () => {
        const dataUrl = cropper.getCroppedCanvas().toDataURL()
        cropper.getCroppedCanvas().toBlob((blob: any) => {
            const file = new File([blob], 'crop', { type: blob.type })
            onCrop &&
                onCrop({
                    file,
                    dataUrl,
                })
        })
    }
    useEffect(() => {
        document.body.setAttribute(
            'style',
            'padding-right:12px;overflow:hidden'
        )
        cropper = new Cropper(imgRef.current as HTMLImageElement)
        return () => {
            document.body.removeAttribute('style')
        }
    }, [])
    return (
        <Backdrop open style={{ zIndex: 3000 }}>
            <div className={styles.crop}>
                <div
                    style={{ width: size, height: size }}
                    onClick={e => e.stopPropagation()}
                >
                    <img
                        ref={imgRef}
                        src={imgStr}
                        style={{ display: 'none' }}
                        alt=""
                    />
                </div>
                <div style={{ marginTop: 10, textAlign: 'right' }}>
                    <Button
                        size="small"
                        variant="contained"
                        style={{ marginRight: 16 }}
                        onClick={handleClose}
                    >
                        取消
                    </Button>
                    <Button
                        size="small"
                        variant="contained"
                        color="secondary"
                        onClick={handleConfirm}
                    >
                        保存
                    </Button>
                </div>
            </div>
        </Backdrop>
    )
}

export default Crop
