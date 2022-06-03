import styled from "@emotion/styled";

const Main = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  text-align: center;
  height: 77vh;
  color: rgb(235, 83, 45);

  @import url("https://fonts.googleapis.com/css2?family=Tiro+Telugu&display=swap");
  font-family: "Tiro Telugu", serif;
  font-weight: 300;

  h1 {
    font-size: 6em;
    margin-top: -20px;
  }
  h3 {
    font-size: 3em;
    margin: 0px;
  }
  h4 {
    font-size: 2em;
    margin: 0px;
    margin-bottom: 10px;
  }
  h5 {
    font-size: 1.5em;
    margin: 0px;
    color: white;
  }
  p {
    color: white;
  }

  article {
    text-align: left;
  }
`;

export { Main };
