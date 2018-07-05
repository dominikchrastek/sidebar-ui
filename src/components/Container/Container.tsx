import { Margin } from "../../primitives";
import { mq } from "../../services/utils";

const Container = Margin.extend`
  max-width: 600px;

  ${mq.desktop`
    position: relative;
    bottom: 24px;`};
  ${mq.mobile`
    padding: 15px;
  `};
`;

export default Container;
