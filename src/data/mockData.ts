export interface Comment {
    id: string;
    content: string;
    replies: Comment[];
  }
  
  export interface Post {
    id: string;
    content: string;
    comments: Comment[];
  }
  
  export const mockPosts: Post[] = [
    
    {
      id: '1',
      content: 'This is the second post',
      comments: [],
    },
  ];
  