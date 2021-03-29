import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import PostModal from './PostModal'

const PostList = ({posts}) => {
    return (
        <ul className="posts-container">
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