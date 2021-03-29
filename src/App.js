import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PostList from './components/PostList'
import './main.scss'
import { getPosts } from './reducers/postsReducer'

function App() {
  const dispatch = useDispatch()
  const posts = useSelector(state => state.posts)
  console.log(posts)
  useEffect(() => {
    dispatch(getPosts())
  }, [])

  return (
    <div className="App">
      <h1 className="text-center">Our Posts</h1>
      <PostList posts={posts} />
    </div>
  );
}

export default App;
