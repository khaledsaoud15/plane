import styled from "styled-components";
import { cards } from "../data";

const WhatWeDo = () => {
  return (
    <Container>
      <Title>What We Do</Title>
      <Desc>Our Services</Desc>
      <Cards>
        {cards.map((i, index) => (
          <Card key={index}>
            <Blob>
              {i.blob}
              {i.icon}
            </Blob>
            <CardTitle>{i.title}</CardTitle>
            <CardDesc>{i.desc}</CardDesc>
          </Card>
        ))}
      </Cards>
    </Container>
  );
};

export default WhatWeDo;

const Container = styled.div`
  padding: 80px 0;
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
const Blob = styled.div`
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

const Card = styled.div`
  padding: 30px;
  border: dashed 1px #999;
  border-radius: 10px;
  transition: all 0.5s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  :hover {
    ${Blob} {
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

const CardTitle = styled.h1`
  margin: 20px 0;
  :hover {
    color: #f94f4f;
  }
`;
const CardDesc = styled.p``;
