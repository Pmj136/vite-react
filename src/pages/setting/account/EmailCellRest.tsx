import React from 'react'
import { Button, Typography } from '@material-ui/core'
import { CellRest } from '@/components/Cell'

interface IProps {
    email: string
}

function EmailCellRest({ email }: IProps) {
    return (
        <CellRest>
            <Typography color="textSecondary" variant="body2">
                {email === '' ? '未绑定邮箱' : email}
            </Typography>
            {email === '' && <Button color="primary">绑定邮箱</Button>}
        </CellRest>
    )
}

export default EmailCellRest
