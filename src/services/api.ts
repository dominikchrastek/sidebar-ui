import { head, isNil, propOr } from "ramda";
import { API } from "../consts/api";
import { Comment, Post, PostWitComments } from "../data/index";

export async function getPost(id: number): Promise<Post> {
  const res = await fetch(`${API}/posts/${id}`);
  return await res.json();
}

export async function createPost(text: string): Promise<number> {
  const res = await fetch(`${API}/posts`, {
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify({
      text
    })
  });
  const data = await res.json();
  return data.id;
}

export async function createComment(
  text: string,
  postId: number
): Promise<number> {
  const res = await fetch(`${API}/comments`, {
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify({
      text,
      postId
    })
  });
  const data = await res.json();
  return data.id;
}

export async function getPosts(): Promise<Post[]> {
  const res = await fetch(`${API}/posts?_sort=id&_order=desc`);
  return await res.json();
}

export async function getComments(): Promise<Comment[]> {
  const res = await fetch(`${API}/comments?_sort=id&_order=desc`);
  return await res.json();
}

export async function getPostComments(id: number): Promise<Comment[]> {
  const res = await fetch(`${API}/posts/${id}/comments?_sort=id&_order=desc`);
  return await res.json();
}

export async function getPostWithComments(
  id: number
): Promise<PostWitComments> {
  const post = await getPost(id);
  const comments = await getPostComments(id);

  return {
    ...post,
    comments
  };
}

export async function getPostsWithComments(): Promise<PostWitComments[]> {
  const posts: Post[] = await getPosts();
  const postsCommentsPromises: Array<Promise<Comment[]>> = posts.map(
    (post: Post) => {
      return getPostComments(post.id);
    }
  );
  const postsComments = await Promise.all(postsCommentsPromises);

  return posts.reduce<PostWitComments[]>((acc: any[], post: Post) => {
    const comments: Comment[] | undefined = postsComments.find(
      (c: Comment[]) => propOr(Infinity, "postId", head(c)) === post.id
    );
    const newPost = {
      ...post,
      comments: isNil(comments) ? [] : comments
    };
    return [...acc, newPost];
  }, []);
}
