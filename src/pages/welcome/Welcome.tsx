import React from 'react'

import toast from 'react-hot-toast'

interface IProps {}

function Welcome(props: IProps) {
    const showTip = () => {
        toast.error('你好')
    }
    return (
        <>
            <button onClick={showTip}>show</button>
        </>
    )
}

export default Welcome
