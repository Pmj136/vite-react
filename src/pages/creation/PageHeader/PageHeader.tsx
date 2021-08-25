import React, { useState } from 'react'
import styles from './_.module.css'
import { useHistory } from 'react-router-dom'

interface IProps {
    onSubmit: () => void
}

function PageHeader(props: IProps) {
    const [title, setTitle] = useState('')
    const history = useHistory()
    const currPath = history.location.pathname
    const toggleEditor = () => {
        if (currPath === '/creation/rt') history.replace('/creation/md')
        if (currPath === '/creation/md') history.replace('/creation/rt')
    }
    return (
        <div className={styles['creation-header']}>
            <div className={styles.wrap}>
                <input
                    value={title}
                    type="text"
                    placeholder="输入文章标题"
                    className={styles['title-input']}
                    onChange={e => setTitle(e.target.value)}
                />
                <section className={styles['header-action']}>
                    <button onClick={toggleEditor}>切换</button>
                    <button>发布</button>
                </section>
            </div>
        </div>
    )
}

export default PageHeader
