import React, { useState } from 'react';
import { mockPosts, Post } from './data/mockData';
import PostComponent from './components/Post';

const App: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>(mockPosts);

  const addPost = (content: string) => {
    const newPost: Post = {
      id: Date.now().toString(),
      content,
      comments: [],
    };
    setPosts([newPost, ...posts]);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Community Page</h1>
      <PostComponent posts={posts} addPost={addPost} />
    </div>
  );
};

export default App;
