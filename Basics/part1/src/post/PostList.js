import React, { useContext } from 'react'
import { StateContext } from '../context'
import Post from './Post'

const PostList = () => {
    const { state } = useContext(StateContext)
    console.log(state)
    const { posts } = state
    return (
        <div>
            {
                posts.map((post, i) => (
                    <React.Fragment key={'post' + i}>
                        <Post {...post} />
                        <hr />
                    </React.Fragment>
                ))
            }
        </div>
    )

}

export default PostList
