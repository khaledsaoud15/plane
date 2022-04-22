import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { team } from "../data";

const Team = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    console.log(carousel.current.scrollWidth);
    console.log(carousel.current.offsetWidth);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <Container>
      <Title>Team</Title>
      <Desc>Meet Our Team Members</Desc>
      <Carousel ref={carousel}>
        <Cards drag="x" dragConstraints={{ right: 0, left: -width }}>
          {team.map((i, index) => (
            <Card>
              <Links>
                <i className="lni lni-facebook"></i>
                <i className="lni lni-twitter"></i>
                <i className="lni lni-linkedin"></i>
              </Links>
              <Img src={i.img} />
              <Name>{i.title}</Name>
              <Profession>{i.desc}</Profession>
            </Card>
          ))}
        </Cards>
      </Carousel>
    </Container>
  );
};

export default Team;

const Container = styled.div`
  padding: 30px 0;
  height: 100%;
  color: #38424d;
`;

const Title = styled.p`
  margin: 10px auto 0;
  width: 30%;
  color: #f94f4f;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
`;

const Desc = styled.h1`
  margin-right: auto;
  margin-left: auto;
  margin-top: 8px;
  margin-bottom: 30px;
  width: 40%;
  text-align: center;
  @media (max-width: 912px) {
    width: 80%;
    text-align: center;
  }
`;
const Carousel = styled.div`
  overflow: hidden;
  width: 100%;
  @media (max-width: 912px) {
    width: 100%;
  }
`;
const Cards = styled(motion.div)`
  display: flex;
  gap: 0;
  padding: 0 30px;
  cursor: grab;
  width: 100%;
  @media (max-width: 912px) {
    width: 100vw;
  }
  @media (max-width: 600px) {
    gap: 40px;
  }
`;
const Links = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  justify-content: center;
  align-items: center;
  color: #fff;
  top: 10px;
  right: -50%;

  i {
    margin-top: 20px;
    padding: 5px;
    border: 2px solid #fff;
    border-radius: 50%;
    :hover {
      background: #f94f4f;
      border: 2px solid #f94f4f;
      cursor: pointer;
    }
  }
  transition: all 0.5s ease;
`;
const Card = styled.div`
  min-width: 300px;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  margin-left: 60px;

  :hover {
    ${Links} {
      right: 20px;
    }
    background: #f94f4f;
    color: #fff;
  }
  transition: all 0.5s ease;
  @media (max-width: 600px) {
    margin-left: 0;
  }
`;
const Img = styled.img`
  width: 100%;
  object-fit: cover;
`;
const Name = styled.h1`
  margin: 10px 30px 5px 30px;
  font-size: 1.4rem;
`;
const Profession = styled.p`
  margin: 0 30px 10px 30px;
`;
