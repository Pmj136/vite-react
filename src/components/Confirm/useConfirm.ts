import { useContext } from 'react'
import { ConfirmContext } from '@/components/Confirm/ConfirmDriver'

function UseConfirm() {
    return useContext(ConfirmContext)
}

export default UseConfirm
