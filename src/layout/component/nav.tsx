import styled from "@emotion/styled";
import { Ul, LinkWrapper as Link } from "./list";

let NavWrapper = styled.nav``;

export default function Nav() {
  return (
    <NavWrapper>
      <Ul>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/quiz">Quiz</Link>
        <Link to="/contact">Contact</Link>
      </Ul>
    </NavWrapper>
  );
}

export { Nav };
