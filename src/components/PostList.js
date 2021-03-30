import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import PostModal from './PostModal'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../reducers/postsReducer'
import { getComments as retrieveAllComments } from '../reducers/commentsReducer'

const PostList = () => {
    const posts = useSelector(state => state.posts)
    const dispatch  = useDispatch()

    const isEmpty = coll => coll.length === 0

    useEffect(() => {
        dispatch(getPosts())
        dispatch(retrieveAllComments())
    }, [dispatch])

    return (
        isEmpty(posts)
            ? <h2 className="text-center">There are no posts here. Try refreshing the page or check your internet connection</h2>
            : <ul className="posts-container">
                {
                    posts.map(post => 
                        <li key={uuidv4()}>
                            <div className="post">
                                <h3 className="post-title">{ post.title }</h3>
                                <div className="post-summary">{ post.body.slice(0, 50)}...</div>
                                <div className="open">
                                    <PostModal post={post} />
                                </div>
                            </div>
                        </li>    
                    )
                }
            </ul>
    )
}

export default PostList