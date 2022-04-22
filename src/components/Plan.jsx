import React, { useState } from "react";
import styled from "styled-components";
import { monthly } from "../data";

const Plan = () => {
  const [switched, setSwitched] = useState(false);
  return (
    <Container>
      <Title>Pricing Plans</Title>
      <Desc>Choose Your Plan</Desc>
      <PlanSelection>
        <Select onClick={() => setSwitched(!switched)}>
          {switched ? "Monthly" : "Yearley"}
        </Select>
      </PlanSelection>
      <Cards>
        {monthly.map((i, index) => (
          <Card>
            <Blob>
              {i.blob} {i.icon}
            </Blob>
            <Price>{switched ? i.monthley : i.yearley}</Price>
            <Des>{i.desc}</Des>
            <Button>Chose A Plan</Button>
          </Card>
        ))}
      </Cards>
    </Container>
  );
};

export default Plan;

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

const PlanSelection = styled.div``;
const Select = styled.h1`
  text-align: center;
  margin: 20px auto;
  cursor: pointer;
  padding: 5px 30px;
  background: #fbfbfb;
  width: 15%;
  border-radius: 50px 50px 0 0;
  transition: all 0.5s ease;
  :hover {
    background: #f94f4f;
    color: #fff;
  }
  @media (max-width: 912px) {
    width: 25%;
  }
  @media (max-width: 600px) {
    width: 45%;
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
  p {
    position: absolute;
    top: 50%;
    left: 50%;
    color: #000;
    transform: translate(-50%, -50%);
    font-size: 1.2rem;
  }
`;
const Button = styled.button`
  all: unset;
  padding: 10px 25px;
  background: #fff;
  color: #000;
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
      p {
        color: #fff;
      }
    }
    ${Button} {
      background: #f94f4f;
      transition: all 0.5s ease;
      color: #fff;
    }
    border: dashed 1px #f94f4f;
  }
  :nth-of-type(2) {
    border: dashed 1px #f94f4f;
    ${Button} {
      background: #f94f4f;
      transition: all 0.5s ease;
      color: #fff;
    }
    ${Blob} {
      svg {
        fill: #f94f4f;
        transition: all 0.5s ease;
      }
      p {
        color: #fff;
      }
    }
  }
`;

const Price = styled.h1`
  margin: 20px 0;
  :hover {
    color: #f94f4f;
  }
`;
const Des = styled.p`
  margin: 0 0 20px 0;
`;
