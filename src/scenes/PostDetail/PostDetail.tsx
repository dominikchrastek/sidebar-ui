import { assocPath, pathOr, propOr } from "ramda";
import * as React from "react";

import { RouteComponentProps } from "react-router";
import {
  Button,
  Card,
  Container,
  Header,
  InputText,
  Separator
} from "../../components/";
import { BREAKPOINTS } from "../../consts/devices";
import { Comment, PostWitComments } from "../../data";
import IconComment from "../../img/comment.svg";
import { Flex, Line, Margin } from "../../primitives";
import { createComment, getPostWithComments } from "../../services/api";
import { mq } from "../../services/utils";
import styled from "../../theme";

interface State {
  text: string;
  post: PostWitComments | null;
}

interface MatchParams {
  id: string;
}

interface Props extends RouteComponentProps<MatchParams> {}

const CommentsContainer = Margin.extend`
  position: relative;
  background: ${({ theme }) => theme.color.gray4};
  padding: 16px 25px 16px;
  :before {
    position: absolute;
    top: -15px;
    left: 0;
    content: "";
    border-style: solid;
    border-width: 15px 0 0 20px;
    border-color: transparent transparent transparent
      ${({ theme }) => theme.color.gray4};
  }
  ${mq.mobile`
    padding: 25px 15px 28px;
  `};
`;

const StyledFlex = Flex.extend`
  ${mq.mobile`
    flex-direction: column;
    & > *:not(:last-child) {
      margin-right: 0;
    }
  `};
`;

const CreateButton = Button.extend`
  ${mq.mobile`
    width: 100%;
`};
`;

const StyledInput = styled(InputText)`
  ${mq.mobile`
    & > img {
      display: none;
    }
`};
`;

const StyledCard = styled(Card)`
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);
`;
class PostDetail extends React.PureComponent<Props, State> {
  public state = {
    text: "",
    post: null
  };

  public async componentDidMount() {
    const postId = parseInt(this.props.match.params.id, 10);
    const post = await getPostWithComments(postId);
    this.setState({ post });
  }

  public handleCreateComment = async (
    e: React.MouseEvent<HTMLButtonElement> | React.FormEvent
  ) => {
    e.preventDefault();

    const postId = parseInt(this.props.match.params.id, 10);
    const text = this.state.text;
    const id = await createComment(text, postId);

    const comment: Comment = {
      id,
      text,
      postId
    };

    this.setState(state => ({
      ...assocPath(
        ["post", "comments"],
        [comment, ...pathOr([], ["post", "comments"], state)],
        state
      ),
      text: ""
    }));
  };

  public handleChangeText = (text: string) => {
    this.setState({ text });
  };

  public handleBack = () => {
    this.props.history.push("/");
  };

  public render() {
    const { post, text } = this.state;
    const comments: Comment[] = propOr([], "comments", post);
    return (
      <>
        <Header onBack={this.handleBack} />
        <Container center={true}>
          <StyledCard>
            <Line color="gray2" fontSize={1.5} scale={2}>
              {propOr("", "text", post)}
            </Line>
            <CommentsContainer marginTop={1.75}>
              {comments.map((comment: Comment) => (
                <div key={comment.id}>
                  <Line marginBottom={0.5} key={comment.id} color="gray7">
                    {comment.text}
                  </Line>
                  <Separator marginBottom={0.5} />
                </div>
              ))}
              <form onSubmit={this.handleCreateComment}>
                <StyledFlex y="center" space={10}>
                  <StyledInput
                    id="input-create-comment"
                    icon={IconComment}
                    value={text}
                    onChange={this.handleChangeText}
                    placeholder="Your comment..."
                  />
                  <CreateButton onClick={this.handleCreateComment}>
                    {/* YOLO */}
                    {typeof window !== undefined &&
                    window.innerWidth >= BREAKPOINTS.MOBILE
                      ? "Add"
                      : "Add Comment!"}
                  </CreateButton>
                </StyledFlex>
              </form>
            </CommentsContainer>
          </StyledCard>
        </Container>
      </>
    );
  }
}

export default PostDetail;
