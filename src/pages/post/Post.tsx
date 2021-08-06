import React, { useEffect } from 'react'

function Post(props: any) {
    useEffect(() => {
        console.log('fetch')
    }, [])
    return <div>post</div>
}

export default Post
