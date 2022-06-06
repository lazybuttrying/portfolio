import styled from "@emotion/styled";
import { Link } from "react-router-dom";

let Ul = styled.ul`
  display: flex;
  list-style: none;
  gap: 10px;
  line-height: 3em;
`;

let LinkWrapper = styled(Link)`
  text-decoration: none;
  font-size: 1em;
  &:link {
    color: white;
  }
  &:visited {
    color: var(--primary-color);
  }
`;

export { Ul, LinkWrapper };
