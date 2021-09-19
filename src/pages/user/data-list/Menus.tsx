import React, { ChangeEvent, ForwardedRef, forwardRef } from 'react'
import { Tab, Tabs } from '@mui/material'
import { useHistory, useParams } from 'react-router-dom'

type TabType = 'dynamic' | 'creation' | 'collection' | 'follow' | 'fans'

function Menus(props: any, ref: ForwardedRef<any>) {
    const params = useParams<{ id: string; type: string }>()
    const history = useHistory()
    const handleChange = (event: ChangeEvent<any>, newValue: TabType) => {
        history.replace('/user/' + params.id + '/' + newValue)
    }
    return (
        <Tabs
            ref={ref}
            value={params.type}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            // style={{ borderBottom: ' 1px solid rgba(0, 0, 0, 0.12)' }}
        >
            <Tab label="动态" value="dynamic" /> {/*评论、点赞*/}
            <Tab label="创作" value="creation" />
            <Tab label="收藏" value="collection" />
            {params.type === 'follow' && <Tab label="关注" value="follow" />}
            {params.type === 'fans' && <Tab label="粉丝" value="fans" />}
        </Tabs>
    )
}

export default forwardRef(Menus)
