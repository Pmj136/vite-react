import React, { useState } from 'react'
import styles from './_.module.css'
import { useHistory } from 'react-router-dom'
import { Button } from '@material-ui/core'

interface IProps {
    onSubmit: (title: string) => void
}

function PageHeader(props: IProps) {
    const [title, setTitle] = useState('')
    const history = useHistory()
    const currPath = history.location.pathname
    const toggleEditor = () => {
        if (currPath === '/creation/rt') history.replace('/creation/md')
        if (currPath === '/creation/md') history.replace('/creation/rt')
    }
    const doSubmit = () => {
        props.onSubmit(title)
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
                    <Button
                        variant="text"
                        color="primary"
                        size="small"
                        onClick={toggleEditor}
                        style={{ marginRight: 16 }}
                    >
                        切换编辑器
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        size="small"
                        onClick={doSubmit}
                    >
                        发布
                    </Button>
                </section>
            </div>
        </div>
    )
}

export default PageHeader
