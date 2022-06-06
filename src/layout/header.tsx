import styled from "@emotion/styled";
import Nav from "./component/nav";
import { useEffect, useState } from "react";
import { Location, useLocation } from "react-router-dom";

let HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 5px 30px;
`;

let Logo = styled.h1`
  font-family: var(--title-font);
`;

let ProgressBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: var(--primary-color);
  height: 3px;
  /* width: ; */
  transition: 0.3s;
`;

interface PageObject {
  [key: string]: number;
}

const pages: PageObject = { about: 1, quiz: 2, contact: 3 };

export default function Header() {
  let location: Location = useLocation();
  const [progress, setProgress] = useState(33);

  useEffect(() => {
    setProgress(
      location.pathname !== "/"
        ? 100 *
            (pages[location.pathname.substring(1)] / Object.keys(pages).length)
        : 0
    );
  }, [location.pathname]);

  return (
    <HeaderWrapper>
      <ProgressBar style={{ width: `${progress}%` }} />
      <Logo>koios</Logo>
      <Nav />
    </HeaderWrapper>
  );
}
