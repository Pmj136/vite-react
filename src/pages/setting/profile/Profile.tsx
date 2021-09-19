import React from 'react'
import { FormControlLabel, Input, Radio, RadioGroup } from '@mui/material'
import { Controller, useForm } from 'react-hook-form'
import { Cell, CellGroup } from '@/components/Cell'
import AvatarUpload from '@/pages/setting/profile/AvatarUpload'
import SubmitAction from '@/pages/setting/profile/SubmitAction'

interface IProps {
    data: {
        avatarUrl: string
        nick: string
        gender: number
        address: string
        intro: string
    }
}

function Profile({ data }: IProps) {
    const { handleSubmit, watch, control } = useForm({
        defaultValues: data,
    })
    const watchFormStates = watch()
    return (
        <CellGroup>
            <Cell title="头像">
                <Controller
                    name="avatarUrl"
                    control={control}
                    render={({ field }) => (
                        <AvatarUpload avatarUrl={field.value} />
                    )}
                />
            </Cell>
            <Cell title="昵称">
                <Controller
                    name="nick"
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field }) => <Input {...field} />}
                />
            </Cell>
            <Cell title="性别">
                <Controller
                    name="gender"
                    control={control}
                    render={({ field }) => (
                        <RadioGroup
                            row
                            {...field}
                            onChange={e => field.onChange(+e.target.value)}
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
                    )}
                />
            </Cell>
            <Cell title="地址">
                <Controller
                    name="address"
                    control={control}
                    render={({ field }) => (
                        <Input
                            style={{ flex: 0.3 }}
                            placeholder="平时都在哪呢！"
                            {...field}
                        />
                    )}
                />
            </Cell>
            <Cell title="简介" titleAlign="flex-start">
                <Controller
                    name="intro"
                    control={control}
                    render={({ field }) => (
                        <Input
                            style={{ flex: 0.88 }}
                            multiline
                            maxRows={4}
                            placeholder="介绍一下自己吧！"
                            {...field}
                        />
                    )}
                />
            </Cell>
            <Cell>
                <SubmitAction
                    data={data}
                    states={watchFormStates}
                    handleSubmit={handleSubmit}
                >
                    保存更改
                </SubmitAction>
            </Cell>
        </CellGroup>
    )
}

export default Profile
