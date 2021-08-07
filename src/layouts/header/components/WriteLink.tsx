import React from 'react'
import { Button } from '@material-ui/core'
import { Create as WriteIcon } from '@material-ui/icons'
import { useTranslation } from 'react-i18next'

function WriteLink() {
    const { t } = useTranslation()
    return (
        <Button
            style={{ marginLeft: 16 }}
            variant="contained"
            color="secondary"
            startIcon={<WriteIcon />}
        >
            {t('header.writeBtnText')}
        </Button>
    )
}

export default WriteLink
