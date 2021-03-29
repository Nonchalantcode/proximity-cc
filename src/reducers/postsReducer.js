import { getAllPosts, getAllComments } from '../service/socialMediaServices'

const postsReducer = (state = [], action) => {
    switch(action.type) {
        case 'INIT_POSTS':
            return action.data
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

  const unifyPostsData = (posts, comments) => {
    /* Returns a dictionary mapping posts ids to their comments, title, and body */
    const commentsData = unifyCommentsData(comments)
    return posts.reduce((postsColl, currentPost) => {
      const { id, title, body } = currentPost
      postsColl.push({
        comments: commentsData[id],
        title,
        body
      })
      return postsColl
    }, [])
}

export const getPosts = () => {
    return async dispatch => {
      try {
        const { data: postsData } = await getAllPosts()
        const { data: commentsData } = await getAllComments()
        dispatch({
            type: 'INIT_POSTS',
            data: unifyPostsData(postsData, commentsData)
        })
      } catch (err) {
        dispatch({
          type: 'INIT_POSTS',
          data: []
        })
      }
    }
}

export default postsReducer