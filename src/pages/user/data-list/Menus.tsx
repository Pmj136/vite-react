import React, { ChangeEvent } from 'react'
import { Tab, Tabs } from '@material-ui/core'
import { useHistory, useParams } from 'react-router-dom'

type TabType = 'creation' | 'collection' | 'dynamic' | 'follow' | 'fans'

function Menus() {
    const params = useParams<{ id: string; type: string }>()
    const history = useHistory()
    const handleChange = (event: ChangeEvent<any>, newValue: TabType) => {
        history.replace('/user/' + params.id + '/' + newValue)
    }
    return (
        <Tabs
            value={params.type}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            // style={{ borderBottom: ' 1px solid rgba(0, 0, 0, 0.12)' }}
        >
            <Tab label="动态" value="dynamic" /> {/*评论、点赞*/}
            <Tab label="创作" value="creation" />
            <Tab label="收藏" value="collection" />
            <Tab label="关注" value="follow" />
            <Tab label="粉丝" value="fans" />
        </Tabs>
    )
}

export default Menus