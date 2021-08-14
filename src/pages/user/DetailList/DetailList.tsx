import React, { useState, memo, ChangeEvent } from 'react'
import { Tab, Tabs } from '@material-ui/core'
import ViewPort from './ViewPort'

function DetailList() {
    const [type, setType] = useState('creation')
    const handleChange = (event: ChangeEvent<any>, newValue: string) => {
        setType(newValue)
    }
    return (
        <div>
            <Tabs
                value={type}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                textColor="secondary"
                indicatorColor="secondary"
            >
                <Tab label="动态" value="dynamic" /> {/*评论、点赞*/}
                <Tab label="创作" value="creation" />
                <Tab label="收藏" value="collection" />
                <Tab label="关注" value="follow" />
                <Tab label="粉丝" value="fans" />
            </Tabs>
            <ViewPort type={type} />
        </div>
    )
}

export default memo(DetailList)
