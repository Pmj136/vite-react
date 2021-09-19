import React, { useState } from 'react'
import { Button, Typography } from '@mui/material'
import { CellRest } from '@/components/Cell'
import PassWordDialog from './PasswordDialog'

interface IProps {
    isSetPassword: boolean
    email: string
}

function PasswordCellRest({ isSetPassword, email }: IProps) {
    const [dialogVisible, setDialogVisible] = useState(false)
    const showDialog = () => {
        setDialogVisible(true)
    }
    const handleClose = () => {
        setDialogVisible(false)
    }
    return (
        <CellRest>
            <Typography color="textSecondary" variant="body2">
                {isSetPassword ? '********' : '未设置密码'}
            </Typography>
            <Button color="primary" onClick={showDialog}>
                {isSetPassword ? '修改密码' : '设置密码'}
            </Button>
            <PassWordDialog
                visible={dialogVisible}
                onClose={handleClose}
                email={email}
            />
        </CellRest>
    )
}

export default PasswordCellRest
