import { isEmpty } from "ramda";
import * as React from "react";
import {
  Button,
  Card,
  Container,
  Header,
  InputTextarea
} from "../../components";
import { PostWitComments } from "../../data";
import imgNoPosts from "../../img/blankslate_illustration_large.svg";
import { Flex, Line, Margin } from "../../primitives";
import { createPost, getPostsWithComments } from "../../services/api";
import styled from "../../theme/";
import Post from "./components/Post/Post";

const PostButton = styled(Button)`
  max-width: 248px;
  width: 100%;
  margin: 0 auto;
`;

const PostsContainer = Margin.extend`
  max-width: 500px;
`;

const StyledCard = styled(Card)`
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);
`;

const NoPosts = Flex.extend`
  text-align: center;
  max-width: 160px;
`;
interface State {
  text: string;
  posts: PostWitComments[];
}

class Posts extends React.PureComponent<{}, State> {
  public state = {
    text: "",
    posts: []
  };

  public async componentDidMount() {
    const posts = await getPostsWithComments();
    this.setState({ posts });
  }

  public handleChangeText = (text: string) => {
    this.setState({ text });
  };

  public handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault();
      this.handleCreatePost(e);
    }
  };

  public handleCreatePost = async (
    e: React.FormEvent | React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    const id = await createPost(this.state.text);
    const newPost: PostWitComments = {
      text: this.state.text,
      id,
      comments: []
    };
    this.setState((state: State) => ({
      posts: [newPost, ...state.posts],
      text: ""
    }));
  };

  public render() {
    const { posts } = this.state;
    return (
      <>
        <Header />
        <Container center={true}>
          <StyledCard>
            <form onSubmit={this.handleCreatePost}>
              <InputTextarea
                id="textarea-create-post"
                onChange={this.handleChangeText}
                onKeyDown={this.handleKeyDown}
                value={this.state.text}
                placeholder="What’s up crustacean?"
                marginBottom={0.625}
              />
              <PostButton onClick={this.handleCreatePost}>Post!</PostButton>
            </form>
          </StyledCard>

          {isEmpty(posts) ? (
            <NoPosts
              center={true}
              marginTop={3}
              marginBottom={3}
              direction="column"
            >
              <img src={imgNoPosts} alt="" />
              <Line fontSize={1.125} color="gray5" marginTop={1}>
                I guess there are no posts today, yet!
              </Line>
            </NoPosts>
          ) : (
            <PostsContainer marginTop={1} center={true}>
              {posts.map((post: PostWitComments) => (
                <Post key={post.id} post={post} />
              ))}
            </PostsContainer>
          )}
        </Container>
      </>
    );
  }
}

export default Posts;
