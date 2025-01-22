export interface Post {
    id: string;
    content: string;
    comments: Comment[];
  }
  export interface Comment {
    id: string;
    content: string;
    replies: Comment[];
  }
  