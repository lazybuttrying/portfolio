import { Routes, Route } from "react-router-dom";
import Header from "./layout/header";
import Footer from "./layout/footer";
import Home from "./page/home";
import About from "./page/about";
import Contact from "./page/contact";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
