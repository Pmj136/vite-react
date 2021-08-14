import React from 'react'
import { Button } from '@material-ui/core'
import { Create as WriteIcon } from '@material-ui/icons'

function WriteLink() {
    return (
        <Button
            style={{ marginLeft: 16 }}
            variant="contained"
            color="secondary"
            startIcon={<WriteIcon />}
        >
            写文章
        </Button>
    )
}

export default WriteLink
