import React, { useState } from 'react'
import UploadArea from '@/components/UploadArea'
import { CircularProgress, makeStyles, Typography } from '@material-ui/core'
import { Add, HighlightOff } from '@material-ui/icons'
import { uploadFileApi } from '@/api/article'

interface IProps {
    cover: string | null
    onChange: (url: string | null) => void
}

const useStyles = makeStyles(theme => {
    const isLight = theme.palette.type === 'light'
    return {
        size100: {
            width: 100,
            height: 100,
            position: 'relative',
        },
        box: {
            border: '1px dashed #aaa',
            borderRadius: 2,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'center',
            backgroundColor: isLight ? '#fafafa' : '',
        },
        view: {
            position: 'absolute',
            top: 2,
            right: 2,
        },
        border: {},
    }
})

function CoverUpload({ cover, onChange }: IProps) {
    const [isLoading, setIsLoading] = useState(false)
    const styles = useStyles()
    const removeImg = (e: any) => {
        e.stopPropagation()
        onChange(null)
    }
    if (isLoading)
        return (
            <div className={[styles.size100, styles.box].join(' ')}>
                <CircularProgress color="inherit" size={20} />
            </div>
        )
    return (
        <UploadArea
            onComplete={e => {
                setIsLoading(true)
                uploadFileApi('cover', e as File)
                    .then(res => {
                        onChange(res.data)
                    })
                    .finally(() => {
                        setIsLoading(false)
                    })
            }}
        >
            {cover != null ? (
                <div className={styles.size100}>
                    <img
                        style={{ width: '100%', height: '100%' }}
                        src={cover}
                        alt=""
                    />
                    <HighlightOff
                        className={styles.view}
                        color="error"
                        onClick={removeImg}
                    />
                </div>
            ) : (
                <div className={[styles.size100, styles.box].join(' ')}>
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
