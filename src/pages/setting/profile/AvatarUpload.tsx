import React, { useMemo, useState } from 'react'
import UploadArea from '@/components/UploadArea'
import { Avatar, Button } from '@material-ui/core'
import Crop from '@/components/Crop/Crop'
import { uploadAvatar } from '@/api/user'
import { setInfo } from '@/store/userStore'
import { toast } from 'react-hot-toast'

interface IProps {
    avatarUrl: string
}

function AvatarUpload({ avatarUrl }: IProps) {
    const [cropAvatar, setCropAvatar] = useState<any>('')
    const [previewAvatar, setPreviewAvatar] = useState(avatarUrl)
    const cropVisible = useMemo(() => cropAvatar !== '', [cropAvatar])
    const handleCrop = (evt: any) => {
        uploadAvatar(evt.file).then(res => {
            setPreviewAvatar(res.data)
            setCropAvatar('')
            setInfo({ avatarUrl: res.data, id: 0 })
        })
    }
    return (
        <>
            <Avatar style={{ width: 100, height: 100 }} src={previewAvatar} />
            <UploadArea
                accept="image/png,image/jpeg"
                style={{ marginLeft: 24 }}
                onComplete={(e: any) => {
                    if (e.type !== 'image/jpeg' && e.type !== 'image/png') {
                        toast('仅支持png、jpeg的图片类型', {
                            id: 'au-toast-error',
                            duration: 4000,
                            icon: '🧐',
                        })
                        return
                    }
                    const reader = new FileReader()
                    reader.readAsDataURL(e as Blob)
                    reader.onloadend = function () {
                        setCropAvatar(reader.result)
                    }
                }}
            >
                <Button
                    style={{ marginLeft: 16 }}
                    size="small"
                    variant="outlined"
                    color="primary"
                >
                    上传头像
                </Button>
            </UploadArea>
            {cropVisible && (
                <Crop
                    imgStr={cropAvatar}
                    onClose={() => setCropAvatar('')}
                    onCrop={handleCrop}
                />
            )}
        </>
    )
}

export default AvatarUpload
