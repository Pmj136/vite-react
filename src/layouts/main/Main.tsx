import React, { ReactElement } from 'react'
import styles from './main.module.css'

interface IProps {
    children: ReactElement
}

function Main(props: IProps) {
    console.log('main render')
    return <main className={styles['app-main']}>{props.children}</main>
}

export default Main
