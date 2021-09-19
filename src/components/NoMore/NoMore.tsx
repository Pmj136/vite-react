import React from 'react'

interface IProps {
    show: boolean
}

function NoMore(props: IProps) {
    return <div style={{ display: props.show ? '' : 'none' }}>没有更多</div>
}

export default NoMore
