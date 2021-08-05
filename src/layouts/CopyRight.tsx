import React, { memo } from 'react'
import styles from './styles/copyright.module.css'

function CopyRight() {
    return (
        <footer className={styles.copyright}>
            <p>Copyright (2019-2021) PengMingJiu All rights reserved.</p>
            <span>赣ICP备号20004413号-1</span>
        </footer>
    )
}

export default memo(CopyRight)
