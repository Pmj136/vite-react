import React, { ReactNode } from 'react'
import classes from './_.module.css'

interface IProps {
    children: ReactNode
}

function TextDriver(props: IProps) {
    return (
        <div className={classes['driver-box']}>
            <div className={classes['driver-box-line']} />
            <div className={classes['driver-box-text']}>{props.children}</div>
            <div className={classes['driver-box-line']} />
        </div>
    )
}

export default TextDriver
