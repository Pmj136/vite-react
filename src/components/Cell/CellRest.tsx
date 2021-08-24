import React, { ReactNode } from 'react'

interface IProps {
    children: ReactNode
}

function CellRest(props: IProps) {
    return <div className="j-cell-rest">{props.children}</div>
}

export default CellRest
