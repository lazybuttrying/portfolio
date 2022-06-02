import { Link } from "react-router-dom";
import styled from "@emotion/styled";

let Main = styled.main`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  flex-direction: column;
  height: 77vh;
  color: rgb(235, 83, 45);

  @import url('https://fonts.googleapis.com/css2?family=Tiro+Kannada:ital@1&display=swap');
  font-family: "Tiro Kannada", serif;

  h1 {
    font-size: 6em;
    margin:0px;
    margin-top: -20px;
  }
  h3 {
    font-size: 3em;
    margin:0px;
}
`

export default function Home() {
    return (
      <>
        <Main>
          <h1>Hello Stranger</h1>
          <h3>Glad to come here</h3>
        </Main>
      </>
    );
  }