import React, { ReactNode, useState } from 'react'
import { Button } from '@mui/material'
import { toast } from 'react-hot-toast'
import { updateProfileApi } from '@/api/user'
import type { UseFormHandleSubmit } from 'react-hook-form/dist/types/form'

interface IProps {
    data: any
    states: any
    handleSubmit: UseFormHandleSubmit<any>
    children: ReactNode
}

function SubmitAction({ data, states, handleSubmit, children }: IProps) {
    const [form, setForm] = useState(data)
    const updateProfile = () => {
        handleSubmit(
            e => {
                const params: any = {}
                for (const k in data) {
                    if (data[k] !== e[k]) {
                        params[k] = e[k]
                    }
                }
                updateProfileApi(params).then(() => {
                    toast('更新成功', {
                        id: 'profile-toast-success',
                        duration: 2500,
                        icon: '🤗',
                    })
                    setForm(states)
                })
            },
            errors => {
                const obj = errors.nick
                if (obj) {
                    toast('昵称不能为空', {
                        id: 'profile-toast-error',
                        duration: 2500,
                        icon: '🙄',
                    })
                }
            }
        )()
    }
    return (
        <Button
            size="small"
            disabled={JSON.stringify(form) === JSON.stringify(states)}
            variant="contained"
            onClick={updateProfile}
        >
            {children}
        </Button>
    )
}

export default SubmitAction
