import React, { memo } from 'react'
import classNames from 'classnames'
import styles from './_.module.css'

function CopyRight() {
    return (
        <footer className={classNames(styles.copyright, 'theme-fc')}>
            <p>Copyright (2019-2021) PengMingJiu All rights reserved.</p>
            <span>赣ICP备号20004413号-1</span>
        </footer>
    )
}

export default memo(CopyRight)
