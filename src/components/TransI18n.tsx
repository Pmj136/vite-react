import React from 'react'
import i18next from '@/i18n'

interface IProps {
    kw: string
}

function TransI18N(props: IProps) {
    return <>{i18next.t(props.kw)}</>
}

export default TransI18N
