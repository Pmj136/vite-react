import React from 'react'
import { Button, Typography } from '@material-ui/core'
import { Create as WriteIcon } from '@material-ui/icons'

function WriteLink() {
    return (
        <Button
            style={{ marginLeft: 16 }}
            variant="contained"
            color="secondary"
            startIcon={<WriteIcon />}
        >
            <Typography>发布帖子</Typography>
        </Button>
    )
}

export default WriteLink
