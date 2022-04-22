import { motion } from "framer-motion";
import styled from "styled-components";
import shapeOne from "../images/shape-1.svg";
import shapeTwo from "../images/shape-2.svg";
import header from "../images/header-image.svg";

const variants = {
  loop1: {
    x: [0, -200, -350, -500, -270, 0],
    transition: {
      yoyo: Infinity,
      ease: "linear",
      duration: 30,
    },
  },
  loop2: {
    x: [0, -150, -200, -300, -100, -50, 0],
    y: [0, -300, -150, -200, -400, -300, 0],
    transition: {
      yoyo: Infinity,
      ease: "linear",
      duration: 30,
    },
  },
  loop3: {
    x: [0, 200, 50, 400, 10, 300, 0, 500],
    y: [0, 20, 44, 80, 25, 20, 50, 0],
    transition: {
      yoyo: Infinity,
      ease: "linear",
      duration: 30,
    },
  },
};
const rotation = {
  loop1: {
    rotate: [0, -200, -350, -500, -270, 0],
    transition: {
      yoyo: Infinity,
      ease: "linear",
      duration: 30,
    },
  },
};

const Header = () => {
  return (
    <Container>
      <ImgContainer>
        <Shape
          src={shapeOne}
          variants={variants}
          top="10%"
          left="100%"
          animate="loop1"
        />
        <Shape
          src={shapeOne}
          top="90%"
          left="50%"
          variants={variants}
          animate="loop2"
        />
        <Shape
          src={shapeOne}
          top="30%"
          left="10%"
          variants={variants}
          animate="loop3"
        />
        <Shape
          src={shapeTwo}
          top="80%"
          left="80%"
          variants={rotation}
          animate="loop1"
        />
        <Shape
          src={shapeTwo}
          top="90%"
          left="10%"
          variants={rotation}
          animate="loop1"
        />
        <Shape
          src={shapeTwo}
          top="20%"
          left="50%"
          variants={rotation}
          animate="loop1"
        />
      </ImgContainer>
      <Content>
        <Title>
          Creative Multipurpose Website <span>Template</span>
        </Title>
        <Desc>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna.
        </Desc>
        <Button>Get Started</Button>
      </Content>
      <HeaderImg>
        <Img src={header} />
      </HeaderImg>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  background: #fbfbff;
  height: calc(100vh - 80px);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #38424d;
  @media (max-width: 912px) {
    flex-direction: column;
    height: 100%;
    padding: 50px 0;
    gap: 30px;
  }
`;

const ImgContainer = styled(motion.div)`
  position: absolute;
  left: 0%;
  top: 0%;
  width: 40%;
  height: 100%;
  @media (max-width: 912px) {
    display: none;
  }
`;
const Shape = styled(motion.img)`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  opacity: 0.5;
`;

const Content = styled.div`
  width: 40%;
  margin-left: 30px;
  z-index: 3;
  @media (max-width: 912px) {
    width: 80%;
  }
`;
const Title = styled.h1`
  font-size: 2.5rem;
  span {
    color: #f94f4f;
  }
  font-weight: 800;
  line-height: 50px;
  @media (max-width: 600px) {
    font-size: 1.8rem;
  }
`;
const Desc = styled.p`
  margin: 40px 0;
  color: #999;
`;
const Button = styled.button`
  all: unset;
  padding: 10px 30px;
  border-radius: 30px 0 30px 30px;
  background: #38424d;
  color: #fff;
  cursor: pointer;
  :hover {
    background-color: #38424dcc;
  }
`;

const HeaderImg = styled.div`
  width: 50%;
  @media (max-width: 912px) {
    width: 80%;
  }
`;
const Img = styled.img`
  width: 100%;
`;
