import React, { ReactElement, ReactNode } from 'react'
import classes from './_.module.css'
import { Box } from '@material-ui/core'

interface IProps {
    children: ReactNode
    right?: ReactNode
    rightWidth?: number
}

function PageContainer(props: IProps) {
    return (
        <div className={classes.container}>
            <section className={classes.main}>{props.children}</section>
            {!!props.right && (
                <>
                    <Box m={1} />
                    <section
                        className={classes.right}
                        style={{ width: props.rightWidth || 360 }}
                    >
                        {props.right}
                    </section>
                </>
            )}
        </div>
    )
}

export default PageContainer
