import React from 'react'
import TransI18N from '@/components/TransI18n'
import { Button } from '@material-ui/core'
import dayjs from 'dayjs'

console.log(dayjs().format('YYYY-MM-DD'))
function Home() {
    return (
        <>
            <Button variant="contained" color="secondary">
                按钮
            </Button>
            <TransI18N kw="hello" />
        </>
    )
}

export default Home
