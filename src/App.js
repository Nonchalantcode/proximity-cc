import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './main.scss'
import { getPosts } from './reducers/postsReducer'

function App() {
  const dispatch = useDispatch()
  const posts = useSelector(state => state.posts)

  useEffect(() => {
    dispatch(getPosts())
  }, [])

  return (
    <div className="App">
      <h1>Hello, there</h1>
      <h3>This is the initial screen of the application</h3>
      <p>So far we have <span className="badge badge-success">{ posts.length}</span> posts </p>
    </div>
  );
}

export default App;
