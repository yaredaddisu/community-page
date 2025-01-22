import React, { useState } from 'react';
import { Comment } from '../data/mockData';
import { TextField, Button, Box, Typography, Divider } from '@mui/material';

interface CommentProps {
  comments: Comment[];
}

const CommentComponent: React.FC<CommentProps> = ({ comments }) => {
  const [newComment, setNewComment] = useState('');
  const [currentComments, setCurrentComments] = useState<Comment[]>(comments);

  const addComment = (content: string, parentId: string | null = null) => {
    const newComment: Comment = {
      id: Date.now().toString(),
      content,
      replies: [],
    };

    if (parentId) {
      setCurrentComments((prev) =>
        prev.map((comment) =>
          comment.id === parentId
            ? { ...comment, replies: [...comment.replies, newComment] }
            : comment
        )
      );
    } else {
      setCurrentComments([newComment, ...currentComments]);
    }
  };

  const handleAddComment = () => {
    if (newComment.trim()) {
      addComment(newComment);
      setNewComment('');
    }
  };

  return (
    <div style={{ marginLeft: '20px' }}>
      <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
        <TextField
          variant="outlined"
          fullWidth
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
          style={{ marginRight: '10px' }}
        />
        <Button variant="contained" color="info" onClick={handleAddComment}>
          Comment
        </Button>
      </div>
      {currentComments.map((comment) => (
        <div
          key={comment.id}
          style={{
            marginTop: '10px',
            borderLeft: '2px solid #ccc',
            paddingLeft: '10px',
            marginLeft: '20px',
          }}
        >
          <Typography variant="body1">{comment.content}</Typography>
          <Divider style={{ margin: '10px 0' }} />
          <CommentComponent comments={comment.replies} />
        </div>
      ))}
    </div>
  );
};

export default CommentComponent;
