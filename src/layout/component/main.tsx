import styled from "@emotion/styled";

const Main = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  min-height: 77vh;
  margin: 0 2em;

  font-family: var(--title-font);
  font-weight: 300;

  h1 {
    font-size: 6em;
    margin-top: -20px;
    color: var(--primary-color);
  }
  h3 {
    font-size: 3em;
    margin: 0px;
    color: var(--primary-color);
  }
  h4 {
    font-size: 2em;
    margin: 0px;
    margin-bottom: 10px;
    color: var(--primary-color);
  }
  h5 {
    font-size: 1.5em;
    margin: 0px;
  }

  article {
    text-align: left;
  }
`;

export { Main };
