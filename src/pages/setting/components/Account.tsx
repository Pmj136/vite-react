import React from 'react'
import type { AccountProps } from '../types'

interface IProps {
    data: AccountProps
}

function Account(props: IProps) {
    return (
        <div>
            <h2>邮箱：{props.data.email}</h2>
            <h2>github：{props.data.githubNick}</h2>
        </div>
    )
}

export default Account
