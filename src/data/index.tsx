export interface Comment {
  id: number;
  text: string;
  postId: number;
}

export interface Post {
  id: number;
  text: string;
}

export interface PostWitComments extends Post {
  comments: Comment[];
}
