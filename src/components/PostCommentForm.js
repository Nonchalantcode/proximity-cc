import React from 'react'
import { useDispatch } from 'react-redux'
import { postComment } from '../reducers/commentsReducer'

const PostCommentForm = ({ postId }) => {
	const dispatch = useDispatch()
	const formHandler = (ev) => {
		ev.preventDefault()
		dispatch(
			postComment(postId , ev.target.comment.value )
		)
		ev.target.comment.value = ''
	}

	return (
		<>
			<p><strong>Share your thoughts:</strong></p>
			<form onSubmit={formHandler} className="comment-form">
				<div className="inputs">
					<textarea 
						cols="40"
						rows="5"
						name="comment"
						placeholder="Enter your comment here">

					</textarea>
					<div className="submit">
						<input type="submit" value="Post" />
					</div>
				</div>
			</form>
		</>
	)
}

export default PostCommentForm