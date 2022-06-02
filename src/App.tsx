import styled from "@emotion/styled";
import { Routes, Route, Link } from "react-router-dom";
import Header from './layout/header';
import Footer from './layout/footer';
import Home from './page/home';
import About from './page/about';

let Layout = styled.div`
  background-color: rgb(10,35,68);
  color: white;
`

function App() {
  return (
    <Layout>
      {/* <h1>Welcome to React Router!</h1> */}
      <Header/>

      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        {/* <Route path="contact" element={<Contact />} /> */}
      </Routes>

      <Footer/>
    </Layout>
  );
}

export default App;
