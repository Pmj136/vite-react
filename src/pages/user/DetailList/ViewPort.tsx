import React, { useEffect } from 'react'

interface IProps {
    type: string
}

function ViewPort(props: IProps) {
    useEffect(() => {
        // console.log(props.type)
    }, [props.type])
    return <div>{props.type}</div>
}

export default ViewPort
