import React from 'react'
import { useParams } from 'react-router-dom'
import Menus from './Menus'
import DynamicList from './views/DynamicList'
import UserList from './views/UserList'
import ArticleList from './views/ArticleList'

function DataList() {
    const params = useParams<{ type: string }>()
    return (
        <>
            <Menus />
            <section>
                {params.type === 'dynamic' && <DynamicList />}
                {params.type === 'creation' && <ArticleList type="creation" />}
                {params.type === 'collection' && (
                    <ArticleList type="collection" />
                )}
                {params.type === 'follow' && <UserList />}
                {params.type === 'fans' && <UserList />}
            </section>
        </>
    )
}

export default DataList
