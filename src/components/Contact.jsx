import React from "react";
import contact from "../images/contact.svg";
import styled from "styled-components";

const Contact = () => {
  return (
    <Container>
      <Img src={contact} />

      <ContactForm>
        <Title>Contact</Title>
        <Desc>Get In Touch</Desc>
        <Content>
          Lorem ipsum dolor sitrg amet, consetetur sadipscing elitr sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna.
        </Content>
        <ContactContainer>
          <Inputs>
            <Input type="text" placeholder="Name" />
            <Input type="email" placeholder="Email" />
          </Inputs>
          <TextArea rows="6" cols="50">
            Message
          </TextArea>
        </ContactContainer>
        <Button>Submit</Button>
      </ContactForm>
    </Container>
  );
};

export default Contact;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 80px 0;
  overflow: hidden;
  height: 100%;
  color: #38424d;
  @media (max-width: 912px) {
    flex-direction: column;
    overflow: visible;
    height: 100%;
  }
`;

const Img = styled.img`
  width: 60%;
  margin: -150px;
  @media (max-width: 912px) {
    width: 100%;
    margin-left: auto;
    height: 100%;
    margin-top: 80px;
    margin-right: auto;
  }
`;
const ContactForm = styled.div`
  width: 50%;
  margin-left: auto;
  @media (max-width: 912px) {
    width: 90%;
    margin-left: 0;
    margin-top: 35%;
  }
`;
const Title = styled.p`
  margin: 10px;
  color: #f94f4f;
  font-size: 18px;
  font-weight: 600;
`;
const Desc = styled.h1`
  margin-top: 8px;
`;
const Content = styled.p`
  margin: 20px 0;
  width: 80%;
  color: #aaa;
  @media (max-width: 912px) {
    width: 90%;
  }
`;
const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 80%;
  @media (max-width: 912px) {
    width: 100%;
  }
`;
const Inputs = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Input = styled.input`
  width: 48%;
  padding: 10px;
  cursor: text;
  outline: none;
  border: 1px solid #cccc;
  @media (max-width: 912px) {
    width: 45%;
  }
`;
const TextArea = styled.textarea`
  padding: 10px;
  cursor: text;
  outline: none;
  border: 1px solid #cccc;
`;
const Button = styled.button`
  all: unset;
  margin-top: 20px;
  padding: 10px 30px;
  background-color: #f94f4f;
  border-radius: 8px;
  color: #fff;
  :hover {
    background-color: #f94f4fcc;
    cursor: pointer;
  }
`;
