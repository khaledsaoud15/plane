import { motion } from "framer-motion";
import styled from "styled-components";
import about from "../images/about.svg";

const spanMotion = {
  initial: {
    y: "-10vh",
    opacity: 0,
  },
  inView: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      delay: 1,
    },
  },
  inViewHeader: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      delay: 1.5,
    },
  },
};
const cardsMotion = {
  initial: {
    opacity: 0,
  },
  inView: {
    opacity: 1,
    transition: {
      type: "spring",
      delay: 1,
    },
  },
  inViewCard2: {
    opacity: 1,
    transition: {
      type: "spring",
      delay: 1.5,
    },
  },
  inViewCard3: {
    opacity: 1,
    transition: {
      type: "spring",
      delay: 2,
    },
  },
};

const aboutMotion = {
  initial: {
    opacity: 0,
  },
  imgFadeIn: {
    opacity: 1,
    transition: {
      delay: 0.8,
    },
  },
  textFadeIn: {
    opacity: 1,
    transition: {
      delay: 1.1,
    },
  },
};

const About = () => {
  return (
    <Container>
      <Span
        variants={spanMotion}
        initial="initial"
        whileInView="inView"
        viewport={{ once: true }}
      >
        About
      </Span>
      <Title
        variants={spanMotion}
        initial="initial"
        whileInView="inViewHeader"
        viewport={{ once: true }}
      >
        Work Process
      </Title>
      <Cards>
        <Card
          variants={cardsMotion}
          initial="initial"
          whileInView="inView"
          viewport={{ once: true }}
        >
          <ImgContainer>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="94"
              height="92"
              viewBox="0 0 94 92"
            >
              <path
                id="Polygon_12"
                data-name="Polygon 12"
                d="M42.212,2.315a11,11,0,0,1,9.576,0l28.138,13.6a11,11,0,0,1,5.938,7.465L92.83,54.018A11,11,0,0,1,90.717,63.3L71.22,87.842A11,11,0,0,1,62.607,92H31.393a11,11,0,0,1-8.613-4.158L3.283,63.3A11,11,0,0,1,1.17,54.018L8.136,23.383a11,11,0,0,1,5.938-7.465Z"
              ></path>
            </svg>
            <i className="lni lni-write"></i>
          </ImgContainer>
          <CardTitile>Research</CardTitile>
          <CardDesc>
            Lorem ipsum dolor sit amet, consetetur sadi aliquyam erat, sed diam
            voluptua. At vero eos accusam et justo duo dolores
          </CardDesc>
        </Card>
        <Card
          variants={cardsMotion}
          initial="initial"
          whileInView="inViewCard2"
          viewport={{ once: true }}
        >
          <ImgContainer>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="94"
              height="92"
              viewBox="0 0 94 92"
            >
              <path
                id="Polygon_12"
                data-name="Polygon 12"
                d="M42.212,2.315a11,11,0,0,1,9.576,0l28.138,13.6a11,11,0,0,1,5.938,7.465L92.83,54.018A11,11,0,0,1,90.717,63.3L71.22,87.842A11,11,0,0,1,62.607,92H31.393a11,11,0,0,1-8.613-4.158L3.283,63.3A11,11,0,0,1,1.17,54.018L8.136,23.383a11,11,0,0,1,5.938-7.465Z"
              ></path>
            </svg>
            <i className="lni lni-bulb"></i>
          </ImgContainer>
          <CardTitile>Prototype</CardTitile>
          <CardDesc>
            Lorem ipsum dolor sit amet, consetetur sadi aliquyam erat, sed diam
            voluptua. At vero eos accusam et justo duo dolores
          </CardDesc>
        </Card>
        <Card
          variants={cardsMotion}
          initial="initial"
          whileInView="inViewCard3"
          viewport={{ once: true }}
        >
          <ImgContainer>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="94"
              height="92"
              viewBox="0 0 94 92"
            >
              <path
                id="Polygon_12"
                data-name="Polygon 12"
                d="M42.212,2.315a11,11,0,0,1,9.576,0l28.138,13.6a11,11,0,0,1,5.938,7.465L92.83,54.018A11,11,0,0,1,90.717,63.3L71.22,87.842A11,11,0,0,1,62.607,92H31.393a11,11,0,0,1-8.613-4.158L3.283,63.3A11,11,0,0,1,1.17,54.018L8.136,23.383a11,11,0,0,1,5.938-7.465Z"
              ></path>
            </svg>
            <i className="lni lni-checkmark-circle"></i>
          </ImgContainer>
          <CardTitile>Build</CardTitile>
          <CardDesc>
            Lorem ipsum dolor sit amet, consetetur sadi aliquyam erat, sed diam
            voluptua. At vero eos accusam et justo duo dolores
          </CardDesc>
        </Card>
      </Cards>
      <WhyUs>
        <AboutImg
          src={about}
          variants={aboutMotion}
          initial="initial"
          whileInView="imgFadeIn"
          viewport={{ once: true }}
        />
        <Content
          variants={aboutMotion}
          initial="initial"
          whileInView="textFadeIn"
          viewport={{ once: true }}
        >
          <ContentSpan>Why Choose Us</ContentSpan>
          <ContentTitle>Your Goal is Our Achievement</ContentTitle>
          <ContentDesc>
            Nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat sed diam voluptua. At vero eos et accusam et justo duo dolores
            et rebum. Stet clita kasd gubergren, no sea takimata sanctus.
          </ContentDesc>
          <ContentCheck>
            <Check>
              <i className="lni lni-checkmark-circle"></i>
              <CheckDesc>
                Vero eos et accusam et justo duo dolores et rebum. Stet clita
                kasd gubergrenv
              </CheckDesc>
            </Check>
            <Check>
              <i className="lni lni-checkmark-circle"></i>
              <CheckDesc>
                Vero eos et accusam et justo duo dolores et rebum. Stet clita
                kasd gubergrenv
              </CheckDesc>
            </Check>
            <Check>
              <i className="lni lni-checkmark-circle"></i>
              <CheckDesc>
                Vero eos et accusam et justo duo dolores et rebum. Stet clita
                kasd gubergrenv
              </CheckDesc>
            </Check>
          </ContentCheck>
        </Content>
      </WhyUs>
    </Container>
  );
};

export default About;

const Container = styled.div`
  padding: 80px 0;
  height: 100%;
  color: #38424d;
`;
const Span = styled(motion.p)`
  margin: 10px auto 0;
  width: 10%;
  color: #f94f4f;
  font-size: 18px;
  font-weight: 600;
`;
const Title = styled(motion.h1)`
  margin-right: auto;
  margin-left: auto;
  margin-top: 8px;
  margin-bottom: 30px;
  width: 20%;
  @media (max-width: 912px) {
    width: 80%;
    text-align: center;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 340px);
  justify-content: center;
  gap: 30px;
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 340px);
  }
  @media (max-width: 912px) {
    grid-template-columns: 80%;
  }
`;
const ImgContainer = styled.div`
  position: relative;
  svg {
    fill: #fff1f1;
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    transition: all 0.5s ease;
  }
  i {
    position: absolute;
    top: 50%;
    left: 50%;
    color: #000;
    transform: translate(-50%, -50%);
    font-size: 4rem;
  }
`;
const Card = styled(motion.div)`
  padding: 30px;
  border: dashed 1px #999;
  border-radius: 10px;
  transition: all 0.5s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  :hover {
    ${ImgContainer} {
      svg {
        fill: #f94f4f;
        transition: all 0.5s ease;
      }
      i {
        color: #fff;
      }
    }
    border: dashed 1px #f94f4f;
  }
`;

const CardTitile = styled.h1`
  margin: 20px 0;
  :hover {
    color: #f94f4f;
  }
`;
const CardDesc = styled.p``;

const WhyUs = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  margin-top: 80px;
  gap: 30px;
  @media (max-width: 912px) {
    flex-direction: column;
  }
`;
const AboutImg = styled(motion.img)`
  width: 60%;
  margin-left: -100px;
  @media (max-width: 912px) {
    width: 100%;
    margin-left: 0;
  }
`;
const Content = styled(motion.div)`
  @media (max-width: 912px) {
    padding: 0 5px;
  }
`;
const ContentSpan = styled.p`
  color: #f94f4f;
  font-weight: 600;
`;
const ContentTitle = styled.h1`
  margin: 10px 0;
  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;
const ContentDesc = styled.p`
  margin: 20px 0;
  color: #999;
`;
const ContentCheck = styled.div``;
const Check = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;

  i {
    padding: 5px;
    background-color: #f94f4f;
    border-radius: 50%;
    color: #fff;
  }
`;
const CheckDesc = styled.p`
  color: #999;
`;
