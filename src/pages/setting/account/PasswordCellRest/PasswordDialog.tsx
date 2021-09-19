import React, { useState } from 'react'
import { Dialog } from '@mui/material'
import Step1 from './Step1'
import Step2 from './Step2'

interface IProps {
    visible: boolean
    onClose: () => void
    email: string
}

function PassWordDialog({ visible, onClose, email }: IProps) {
    const [step, setStep] = useState(1)
    const handleClose = (e: any, reason: string) => {
        if (reason === 'backdropClick') return
        onClose()
    }
    return (
        <Dialog fullWidth maxWidth="xs" open={visible} onClose={handleClose}>
            {step === 1 && (
                <Step1
                    email={email}
                    onClose={e => handleClose(e, 'click')}
                    onSuccess={() => setStep(2)}
                />
            )}
            {step === 2 && <Step2 onClose={e => handleClose(e, 'click')} />}
        </Dialog>
    )
}

export default PassWordDialog
