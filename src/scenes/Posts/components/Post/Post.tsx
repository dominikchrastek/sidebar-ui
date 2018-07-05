import { isEmpty, take } from "ramda";
import * as React from "react";
import { Card, RawLink, Separator } from "../../../../components/";
import { PostWitComments } from "../../../../data/";
import IconComment from "../../../../img/comment.svg";
import { Flex, Line } from "../../../../primitives";
import styled from "../../../../theme/";

const StyledCard = styled(Card)`
  padding-bottom: 16px;
  &:hover {
    box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.15), 0 2px 0 0 #ebebeb;
  }
  &:active {
    box-shadow: inset 0 2px 0 0 rgba(0, 0, 0, 0.1);
    background: ${({ theme }) => theme.color.gray6};
  }
`;

interface Props {
  post: PostWitComments;
}
const MAX_CHARS = 200;
class Posts extends React.PureComponent<Props> {
  public render() {
    const {
      post: { text, comments, id }
    } = this.props;

    const title =
      text.length >= MAX_CHARS ? `${take(MAX_CHARS, text)}&hellip;` : text;
    return (
      <RawLink to={`/detail/${id}`}>
        <StyledCard marginBottom={0.625}>
          <Line fontSize={1.25} color="gray2" scale={1.625}>
            <span dangerouslySetInnerHTML={{ __html: title }} />
          </Line>
          <Separator marginTop={0.625} marginBottom={0.625} />
          <Flex y="center" space={10}>
            <img src={IconComment} alt="Icon Comment" />
            <Line color="gray5">
              {isEmpty(comments)
                ? "Needs your comment!"
                : `${comments.length} comments`}
            </Line>
          </Flex>
        </StyledCard>
      </RawLink>
    );
  }
}

export default Posts;
