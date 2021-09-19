import React, { useState } from 'react'
import { CircularProgress, Typography } from '@mui/material'
import type { Theme } from '@mui/material'
import { Add, HighlightOff } from '@mui/icons-material'
import { makeStyles } from '@mui/styles'
import classNames from 'classnames'
import UploadArea from '@/components/UploadArea'
import { uploadFileApi } from '@/api/article'

interface IProps {
    value: string
    onChange: (url: string) => void
}

const useStyles = makeStyles((theme: Theme) => {
    const isLight = theme.palette.mode === 'light'
    return {
        size100: {
            width: 100,
            height: 100,
            position: 'relative',
        },
        box: {
            border: '1px dashed #aaa',
            borderRadius: 4,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'center',
            backgroundColor: isLight ? '#fff' : '',
        },
        view: {
            position: 'absolute',
            top: 2,
            right: 2,
        },
    }
})

function CoverUpload({ value, onChange }: IProps) {
    const [isLoading, setIsLoading] = useState(false)
    const classes = useStyles()
    const removeImg = (e: any) => {
        e.stopPropagation()
        onChange('')
    }
    if (isLoading)
        return (
            <div className={classNames(classes.size100, classes.box)}>
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
            {value !== '' ? (
                <div className={classes.size100}>
                    <img
                        style={{ width: '100%', height: '100%' }}
                        src={value}
                        alt=""
                    />
                    <HighlightOff
                        className={classes.view}
                        color="error"
                        onClick={removeImg}
                    />
                </div>
            ) : (
                <div className={classNames(classes.size100, classes.box)}>
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
