import React from 'react'
import { useParams } from 'react-router-dom'
import Menus from './Menus'
import DynamicList from './views/DynamicList'
import UserList from './views/UserList'
import ArticleList from './views/ArticleList'
import { Card } from '@mui/material'

function DataList() {
    const params = useParams<{ type: string }>()
    return (
        <>
            <Card elevation={0} style={{ marginTop: 16 }}>
                <Menus />
            </Card>
            {params.type === 'dynamic' && <DynamicList />}
            {params.type === 'creation' && <ArticleList type="creation" />}
            {params.type === 'collection' && <ArticleList type="collection" />}
            {params.type === 'follow' && <UserList type="follow" />}
            {params.type === 'fans' && <UserList type="fans" />}
        </>
    )
}

export default DataList
