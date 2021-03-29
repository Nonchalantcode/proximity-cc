import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PostList from './components/PostList'
import './main.scss'
import { getPosts } from './reducers/postsReducer'

function App() {
  const dispatch = useDispatch()
  const posts = useSelector(state => state.posts)

  const isEmpty = coll => coll.length === 0

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])

  return (
    <div className="App">
      <h1 className="text-center">Our Posts</h1>
      {
        isEmpty(posts)
          ? <h2 className="text-center">There are no posts here. Try refreshing the page or check your internet connection</h2>
          : <PostList posts={posts} />
      }
    </div>
  );
}

export default App;
