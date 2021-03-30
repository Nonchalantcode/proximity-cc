import { getAllComments } from '../service/socialMediaServices'

const commentsReducer = (state = Object.create(null), action) => {
	switch(action.type) {
	case 'INIT_COMMENTS':  {
		return action.data
	}
	case 'POST_COMMENT': {
		const comment = {
			body: action.data.comment,
			name: 'anonymous',
			email: 'anonymous.user@hello.com'
		}
		const comments = [comment, ...state[action.data.postId]]
		return {...state, [action.data.postId]: comments}
	} 
	default:
		return state
	}
}

const unifyCommentsData = (comments) => {
	/* Returns a dictionary mapping posts ids to their comments */
	return comments.reduce((commentsDict, currentComment) => {
		const { postId, name, email, body } = currentComment
		if( postId in commentsDict ) {
			commentsDict[postId].push({ name, email, body })
		} else {
			commentsDict[postId] = [{ name, email, body }]
		}
		return commentsDict
	}, Object.create(null))
}

export const getComments = () => {
	return async dispatch => {
		try {
			const { data: commentsData } = await getAllComments()
			dispatch({
				type: 'INIT_COMMENTS',
				data: unifyCommentsData(commentsData)
			})
		} catch (err) {
			dispatch({
				type: 'INIT_COMMENTS',
				data: []
			})
		}
	}
}

export const postComment = (postId, comment) => {
	return {
		type: 'POST_COMMENT',
		data: {
			postId,
			comment
		}
	}
}

export default commentsReducer