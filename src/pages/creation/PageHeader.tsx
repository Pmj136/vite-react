import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Button, makeStyles } from '@material-ui/core'
import { toast } from 'react-hot-toast'

interface IProps {
    type: string
    value: string
    onSubmit: (title: string) => void
}

const useThemeStyles = makeStyles(theme => {
    return {
        root: {
            position: 'sticky',
            top: 0,
            backgroundColor: theme.palette.background.paper,
            zIndex: 500,
            boxSizing: 'border-box',
        },
        wrap: {
            display: 'flex',
            alignItems: 'center',
            margin: '0 auto',
            width: 'var(--wrap-width)',
            height: 'var(--header-height)',
            boxSizing: 'border-box',
        },
        input: {
            flex: 1,
            marginRight: 16,
            height: '100%',
            padding: 0,
            fontSize: '1.4rem',
            border: 'none',
            outline: 'none',
            backgroundColor: 'transparent',
            color: theme.palette.text.primary,
            '&::placeholder': {
                color: '#aaa',
            },
        },
    }
})
const toastId = 'editor-header-warn'

function PageHeader({ type, value, onSubmit }: IProps) {
    const [title, setTitle] = useState('')
    const history = useHistory()
    const themeStyles = useThemeStyles()

    useEffect(() => {
        setTitle(value)
    }, [value])
    const toHome = () => {
        history.replace('/')
    }
    const doSubmit = () => {
        if (title === '') {
            toast('标题不能为空', {
                id: toastId,
                duration: 2500,
                icon: '😅',
            })
            return
        }
        if (title !== '' && title.trim() === '') {
            toast('标题不能为空白', {
                id: toastId,
                duration: 2500,
                icon: '😅',
            })
            return
        }
        onSubmit(title)
    }
    return (
        <div className={themeStyles.root}>
            <div className={themeStyles.wrap}>
                <input
                    className={themeStyles.input}
                    value={title}
                    type="text"
                    placeholder="输入文章标题"
                    onChange={e => setTitle(e.target.value)}
                />
                <section>
                    <Button
                        variant="text"
                        color="primary"
                        onClick={toHome}
                        style={{ marginRight: 16 }}
                    >
                        返回主页
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        onClick={doSubmit}
                    >
                        {type === 'create' ? '发布' : '更新'}
                    </Button>
                </section>
            </div>
        </div>
    )
}

export default PageHeader
