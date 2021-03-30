import React, { useEffect } from 'react'
import PostList from './components/PostList'
import './main.scss'

function App() {
  return (
    <div className="App">
      <h1 className="text-center">Our Posts</h1>
      <PostList />
    </div>
  );
}

export default App;
