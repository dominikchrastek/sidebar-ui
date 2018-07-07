import * as React from "react";
import Flex from "../../primitives/Flex/Flex";
import Line from "../../primitives/Line/Line";
import Margin from "../../primitives/Margin/Margin";
import styled from "../../theme";

const Title = Line.extend`
  height: 14px;
  line-height: 14px;
  padding-left: 38px;
  letter-spacing: 0.2px;
  font-weight: 900;
  opacity: 0.21;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.white};
  word-break: keep-all;
`;

const Hr = styled(Margin.withComponent("hr"))`
  width: 14px;
  height: 2px;
  background: rgba(255, 255, 255, 0.25);
  border: none;
`;

interface Props {
  title: string;
  children: React.ReactNodeArray | React.ReactNode;
  isSidebarOpen: boolean;
}
const Section = (props: Props) => (
  <>
    {props.isSidebarOpen ? (
      <Title marginTop={16 / 24} fontSize={15 / 24} marginBottom={6 / 24}>
        {props.title}
      </Title>
    ) : (
      <Flex x="center" y="center">
        <Hr center={true} marginBottom={12 / 24} marginTop={22 / 24} />
      </Flex>
    )}
    <ul>{props.children}</ul>
  </>
);

export default Section;
