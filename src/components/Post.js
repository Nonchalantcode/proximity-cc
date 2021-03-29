import React from 'react'
import { v4 as uuidv4 } from 'uuid'

const Post = ({ post }) => {
    return (
        <div className="user-post">
            <div className="post-heading">
                <h1>{ post.title }</h1>
            </div>
            <div className="post-body">
                <p>{ post.body }</p>
            </div>
            <div className="comments-section">
                <p><strong>Comments ({post.comments.length})</strong></p>
                <ul>
                    {
                        post.comments.map(comment => (
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