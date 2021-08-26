import React, { useState } from 'react'
import UploadArea from '@/components/UploadArea'
import { makeStyles, Typography } from '@material-ui/core'
import { Add } from '@material-ui/icons'
import { uploadImg } from '@/api/article'

interface IProps {
    cover: string | null
    onUploaded: (url: string) => void
}

const useStyles = makeStyles({
    box: {
        width: 100,
        height: 100,
        border: '1px dashed #d9d9d9',
        borderRadius: 2,
        cursor: 'pointer',
    },
    upload: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#fafafa',
    },
})

function CoverUpload({ cover, onUploaded }: IProps) {
    const [isLoading, setIsLoading] = useState(false)
    const styles = useStyles()
    if (isLoading)
        return (
            <div className={[styles.box, styles.upload].join(' ')}>
                <span>loading</span>
            </div>
        )
    return (
        <UploadArea
            onComplete={e => {
                setIsLoading(true)
                uploadImg(e as File)
                    .then(res => {
                        onUploaded(res.data)
                    })
                    .finally(() => {
                        setIsLoading(false)
                    })
            }}
        >
            {cover != null ? (
                <img className={styles.box} src={cover} alt="" />
            ) : (
                <div className={[styles.box, styles.upload].join(' ')}>
                    <Add fontSize="large" color="disabled" />
                    <Typography variant="body2" color="textSecondary">
                        上传封面
                    </Typography>
                </div>
            )}
        </UploadArea>
    )
}

export default CoverUpload
