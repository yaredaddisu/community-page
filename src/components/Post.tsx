import React, { useState } from 'react';
import { Post } from '../model/PostModel';
import CommentComponent from './Comment';
import { TextField, Button, Box, Typography, Card, CardContent } from '@mui/material';

interface PostProps {
  posts: Post[];
  addPost: (content: string) => void;
}

const PostComponent: React.FC<PostProps> = ({ posts, addPost }) => {
  const [newPost, setNewPost] = useState('');

  const handleAddPost = () => {
    if (newPost.trim()) {
      addPost(newPost);
      setNewPost('');
    }
  };

  return (
    <Box sx={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <TextField
          fullWidth
          variant="outlined"
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          placeholder="Create a new post..."
          sx={{ marginRight: '10px' }}
        />
        <Button variant="contained" color="primary" onClick={handleAddPost}>
          Post
        </Button>
      </Box>
      {posts.map((post, index) => (
         <><Typography variant="h6" color="text.primary">
              {index + 1}
          </Typography><Card key={post.id} sx={{ marginBottom: '20px' }}>
                  <CardContent>
                      <Typography variant="h6" color="text.primary">
                          {post.content}
                      </Typography>
                      <CommentComponent comments={post.comments} />
                  </CardContent>
              </Card></>
      ))}
    </Box>
  );
};

export default PostComponent;
