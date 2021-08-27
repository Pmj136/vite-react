import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Button, styled } from '@material-ui/core'
import { toast } from 'react-hot-toast'

interface IProps {
    value: string
    onSubmit: (title: string) => void
}

const Root = styled('div')({
    position: 'sticky',
    top: 0,
    backgroundColor: ' #ffffff',
    zIndex: 1200,
})
const Wrap = styled('div')({
    display: 'flex',
    alignItems: 'center',
    margin: '0 auto',
    width: 'var(--wrap-width)',
    height: 'var(--header-height)',
    boxSizing: 'border-box',
})
const TitleInput = styled('input')({
    flex: 1,
    marginRight: 16,
    height: '100%',
    padding: 0,
    fontSize: '1.4rem',
    border: 'none',
    outline: 'none',
    backgroundColor: 'transparent',
    '&::placeholder': {
        color: '#aaa',
    },
})

const toastId = 'editor-header-warn'

function PageHeader({ value, onSubmit }: IProps) {
    const [title, setTitle] = useState('')
    const history = useHistory()
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
        <Root>
            <Wrap>
                <TitleInput
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
                        发布
                    </Button>
                </section>
            </Wrap>
        </Root>
    )
}

export default PageHeader
