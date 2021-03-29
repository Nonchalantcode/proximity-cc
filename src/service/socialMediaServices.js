import axios from 'axios'

const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments'
const POSTS_URL    = 'https://jsonplaceholder.typicode.com/posts'

const getAllComments = async () => {
    try {
        return await axios.get(COMMENTS_URL)
    } catch (error) {
        return { error: error.message }
    }
}

const getAllPosts = async () => {
    try {
        return await axios.get(POSTS_URL)
    } catch (error) {
        return { error: error.message }
    }
}

export {
    getAllComments,
    getAllPosts
}