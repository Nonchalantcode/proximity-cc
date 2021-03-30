import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { postComment } from '../reducers/commentsReducer'
import { useDispatch, useSelector } from 'react-redux'
import PostCommentForm from './PostCommentForm'

const Post = ({ post }) => {
    const comments = useSelector(state => state.comments)
    
    return (
        <div className="user-post">
            <div className="post-heading">
                <h1>{ post.title }</h1>
            </div>
            <div className="post-body">
                <p>{ post.body }</p>
            </div>
            <div className="comments-section">
                <PostCommentForm postId={post.id} />
                <p><strong>Comments ({comments[post.id].length})</strong></p>
                <ul>
                    {
                        comments[post.id].map(comment => (
                            <li key={ uuidv4() }>
                                <p className="author badge">{ comment.email }</p>
                                <p className="content">{ comment.body }</p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )   
}

export default Post