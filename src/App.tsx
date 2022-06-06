import { Routes, Route } from "react-router-dom";
import Header from "./layout/header";
import Footer from "./layout/footer";
import Home from "./page/home";
import About from "./page/about";
import Contact from "./page/contact";
import Quiz from "./page/choice/quiz";
import Food from "./page/choice/food";
import { Main } from "./layout/component/main";

function App() {
  return (
    <>
      <Header />

      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="quiz" element={<Quiz />} />
          <Route path="quiz/food" element={<Food />} />
        </Routes>
      </Main>

      <Footer />
    </>
  );
}

export default App;
