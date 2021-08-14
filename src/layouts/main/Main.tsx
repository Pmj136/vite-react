import React, { ReactElement } from 'react'
import styles from './_.module.css'

interface IProps {
    children: ReactElement
}

function Main(props: IProps) {
    return <main className={styles['app-main']}>{props.children}</main>
}

export default Main
