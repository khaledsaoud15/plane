import About from "./components/About";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import styled from "styled-components";
import { useEffect, useState } from "react";
import WhatWeDo from "./components/WhatWeDo";
import { motion } from "framer-motion";
import Work from "./components/Work";
import Plan from "./components/Plan";
import Team from "./components/Team";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowBtn(!showBtn);
      } else {
        setShowBtn(showBtn);
      }
    });
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Container>
      {showBtn && (
        <ArrowUp
          onClick={scrollTop}
          whileTap={{ scale: 0.5 }}
          whileHover={{ scale: 1.1 }}
        >
          <i className="lni lni-arrow-up-circle"></i>
        </ArrowUp>
      )}
      <Navbar />
      <Header />
      <About />
      <WhatWeDo />
      <Work />
      <Plan />
      <Team />
      <Blog />
      <Contact />
      <Footer />
    </Container>
  );
}

export default App;

const ArrowUp = styled(motion.div)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 989899999;
  background: #f94f4f;
  i {
    font-size: 1.5rem;
    cursor: pointer;
    color: #fff;
  }
  padding: 6px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  position: relative;
`;
