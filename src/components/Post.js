import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { postComment } from '../reducers/commentsReducer'
import { useDispatch, useSelector } from 'react-redux'

const Post = ({ post }) => {
    const dispatch = useDispatch()
    const comments = useSelector(state => state.comments)

    const formHandler = (ev) => {
        ev.preventDefault();
        dispatch(
            postComment(post.id , ev.target.comment.value )
        )
        ev.target.comment.value = ''
    }
    
    return (
        <div className="user-post">
            <div className="post-heading">
                <h1>{ post.title }</h1>
            </div>
            <div className="post-body">
                <p>{ post.body }</p>
            </div>
            <div className="comments-section">
                <p><strong>Share your thoughts:</strong></p>
                <form onSubmit={formHandler}>
                    <textarea 
                        cols="40"
                        rows="5"
                        name="comment"
                        placeholder="Enter your comment here">

                    </textarea>
                    <div className="submit">
                        <input type="submit" value="Post" />
                    </div>
                </form>
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