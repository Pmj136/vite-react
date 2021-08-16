import React from 'react'
import { useParams } from 'react-router-dom'

interface IProps {}

function UserList(props: IProps) {
    const useParams1 = useParams()
    console.log(useParams1)
    return <div>userList</div>
}

export default UserList
