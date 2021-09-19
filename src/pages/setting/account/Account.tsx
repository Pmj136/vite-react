import React from 'react'
import { CellGroup, Cell, CellRest } from '@/components/Cell'
import { Button, Typography } from '@mui/material'
import PasswordCellRest from './PasswordCellRest/PasswordCellRest'
import EmailCellRest from './EmailCellRest'

interface IProps {
    data: {
        email: string
        githubId: number
        githubNick: string
        qqId: string
        qqNick: string
        giteeId: number
        giteeNick: string
        isSetPassword: boolean
    }
}

function Account(props: IProps) {
    return (
        <CellGroup>
            <Cell title="邮箱">
                <EmailCellRest email={props.data.email} />
            </Cell>
            <Cell title="QQ">
                <CellRest>
                    <Typography color="textSecondary" variant="body2">
                        {props.data.qqId === '' ? '未绑定' : props.data.qqNick}
                    </Typography>
                    <Button color="primary">绑定</Button>
                </CellRest>
            </Cell>
            <Cell title="Github">
                <CellRest>
                    <Typography color="textSecondary" variant="body2">
                        {props.data.githubId === 0
                            ? '未绑定'
                            : props.data.githubNick}
                    </Typography>
                    <Button color="primary">绑定</Button>
                </CellRest>
            </Cell>
            <Cell title="Gitee">
                <CellRest>
                    <Typography color="textSecondary" variant="body2">
                        {props.data.giteeId === 0
                            ? '未绑定'
                            : props.data.giteeNick}
                    </Typography>
                    <Button color="primary">绑定</Button>
                </CellRest>
            </Cell>
            {props.data.email !== '' && (
                <Cell title="密码">
                    <PasswordCellRest
                        isSetPassword={props.data.isSetPassword}
                        email={props.data.email}
                    />
                </Cell>
            )}
        </CellGroup>
    )
}

export default Account
