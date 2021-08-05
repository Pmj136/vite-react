import React from 'react'
import { Button } from '@material-ui/core'
import dayjs from 'dayjs'

console.log(dayjs().format('YYYY-MM-DD'))
function Home() {
    return (
        <>
            <Button variant="contained" color="secondary">
                按钮
            </Button>
        </>
    )
}

export default Home
