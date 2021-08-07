import React from 'react'
import { Button } from '@material-ui/core'
import { Create as WriteIcon } from '@material-ui/icons'
import { Trans } from 'react-i18next'

function WriteLink() {
    return (
        <Button
            style={{ marginLeft: 16 }}
            variant="contained"
            color="secondary"
            startIcon={<WriteIcon />}
        >
            <Trans>header.writeBtnText</Trans>
        </Button>
    )
}

export default WriteLink
