import React, { useEffect, useState } from 'react'
import type { ProfileProps } from '../types'
import {
    FormControlLabel,
    Input,
    List,
    ListItem,
    ListItemText,
    Radio,
    RadioGroup,
    TextField,
    Typography,
} from '@material-ui/core'

import classes from './reset.module.css'
import { IUser } from '@/types/user'
import { Skeleton } from '@material-ui/lab'

interface IProps {
    data: IUser
}

function Profile(props: IProps) {
    const [form, setForm] = useState<IUser>({ gender: 0 })
    useEffect(() => {
        setForm(props.data)
    }, [props.data])
    return (
        <List>
            <ListItem className={classes.item}>
                <div className={classes.title}>
                    <Typography>昵称</Typography>
                </div>
                {!!props.data.nick ? (
                    // <Input value={form.nick} onChange={e => {
                    //     // setNick(e.target.value)
                    // }} />
                    <span>{form.nick}</span>
                ) : (
                    <Skeleton width={200} height={33.4} variant="text" />
                )}
            </ListItem>
            <ListItem className={classes.item}>
                <div className={classes.title}>
                    <Typography>性别</Typography>
                </div>
                <RadioGroup
                    row
                    value={form.gender}
                    onChange={e => {
                        // setGender(+e.target.value)
                    }}
                >
                    <FormControlLabel
                        value={1}
                        control={<Radio size="small" />}
                        label="男"
                    />
                    <FormControlLabel
                        value={2}
                        control={<Radio size="small" />}
                        label="女"
                    />
                    <FormControlLabel
                        value={0}
                        control={<Radio size="small" />}
                        label="保密"
                    />
                </RadioGroup>
            </ListItem>
            <ListItem className={classes.item}>
                <div className={classes.title}>
                    <Typography>简介</Typography>
                </div>
                <ListItemText primary="Single-line item" />
            </ListItem>
            <ListItem className={classes.item}>
                <div className={classes.title}>
                    <Typography>地址</Typography>
                </div>
                <ListItemText primary="Single-line item" />
            </ListItem>
            <ListItem className={classes.item}>
                <div className={classes.title}>
                    <Typography>注册时间</Typography>
                </div>
                <ListItemText primary="Single-line item" />
            </ListItem>
        </List>
    )
}

export default Profile
