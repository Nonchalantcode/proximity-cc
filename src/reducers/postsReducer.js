import { getAllPosts } from '../service/socialMediaServices'

const postsReducer = (state = [], action) => {
    switch(action.type) {
        case 'INIT_POSTS':
            return action.data
        default:
            return state
    }
}

const unifyPostsData = (posts) => {
    /* Returns a dictionary mapping posts ids to their comments, title, and body */
    return posts.reduce((postsColl, currentPost) => {
      const { id, title, body } = currentPost
      postsColl.push({
        title,
        body,
        id
      })
      return postsColl
    }, [])
}

export const getPosts = () => {
    return async dispatch => {
      try {
        const { data: postsData } = await getAllPosts()
        dispatch({
            type: 'INIT_POSTS',
            data: unifyPostsData(postsData)
        })
      } catch (err) {
        dispatch({
          type: 'INIT_POSTS',
          data: []
        })
      }
    }
}

export const postComment = ({ postTitle, comment }) => {
  return {
    type: 'POST_COMMENT',
    data: {
      postTitle,
      comment
    }
  }
}

export default postsReducer