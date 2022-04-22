import { motion } from "framer-motion";
import styled from "styled-components";

import { work } from "../data";
const Work = () => {
  return (
    <Container>
      <Title>Works</Title>
      <Desc>Some of Our Recent Works</Desc>
      <Cards>
        {work.map((i, index) => (
          <Card key={index}>
            <Img src={i.img} />
            <CardTitle>{i.title}</CardTitle>
            <CardDesc>{i.Desc}</CardDesc>
          </Card>
        ))}
      </Cards>
    </Container>
  );
};

export default Work;

const Container = styled.div`
  padding: 30px 0;
  height: 100%;
  color: #38424d;
  background-color: #fbfbff;
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

const Cards = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 300px);
  gap: 30px;
  justify-content: center;
  @media (max-width: 912px) {
    grid-template-columns: 80%;
  }
`;
const Card = styled.div`
  border-radius: 10px;
  overflow: hidden;
  width: 100%;
  height: 60vh;
  background: #fff;
  -webkit-box-shadow: 0px 0px 16px 2px #9c9c9c;
  box-shadow: 0px 0px 16px 2px #9c9c9c;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Img = styled.img`
  width: 100%;
  height: 50vh;
  object-fit: cover;
`;
const CardTitle = styled.h1`
  margin: 10px 30px 5px 30px;
  font-size: 1.4rem;
`;
const CardDesc = styled.p`
  margin: 0 30px 20px 30px;
  @media (max-width: 912px) {
    margin: 0 30px 40px 30px;
  }
`;
