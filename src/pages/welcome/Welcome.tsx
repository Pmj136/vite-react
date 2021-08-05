import React from 'react'

import toast from 'react-hot-toast'
import { Button } from '@material-ui/core'

interface IProps {}

function Welcome(props: IProps) {
    const showTip = () => {
        toast.error('你好')
    }
    return (
        <>
            <Button>哈哈</Button>
            <button onClick={showTip}>show</button>
        </>
    )
}

export default Welcome
