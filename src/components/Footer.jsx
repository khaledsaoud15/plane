import React from "react";
import styled from "styled-components";
import logo from "../images/logo-footer.svg";

const Footer = () => {
  return (
    <Container>
      <FooterContainer>
        <Left>
          <Logo src={logo} />
          <Desc>
            Lorem ipsum dolor sitco nsetetu nonumy eirmod tempor invidunt ut
            labore et dolore magna uyam erat, sed diam.
          </Desc>
        </Left>
        <Center>
          <CenterLeft>
            <Title>Quick Links</Title>
            <Parag>Company</Parag>
            <Parag>Privacy Policy</Parag>
            <Parag>About</Parag>
          </CenterLeft>
          <CenterRight>
            <Title>Resources</Title>
            <Parag>Support</Parag>
            <Parag>Contact</Parag>
            <Parag>terms</Parag>
          </CenterRight>
        </Center>
        <Right>
          <NewsLetter>Newsletter</NewsLetter>
          <Inputs>
            <Input type="email" placeholder="Email" />
            <Button>Subscribe</Button>
          </Inputs>
        </Right>
      </FooterContainer>
      <DownFooter>
        <Links>
          <i className="lni lni-facebook"></i>
          <i className="lni lni-twitter"></i>
          <i className="lni lni-instagram"></i>
          <i className="lni lni-linkedin"></i>
        </Links>
        <FooterDesc>
          Designed and Developed by <span>UIdeck</span>
        </FooterDesc>
      </DownFooter>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  background: #38424d;
  padding: 10px 80px;
  height: 60vh;
  color: #fff;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 912px) {
    padding: 40px 10px;
    height: 100%;
    gap: 80px;
  }
`;
const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: center;
  margin-top: auto;
  @media (max-width: 912px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;
const Left = styled.div`
  flex: 1;
  z-index: 9999;
  width: 100%;
`;
const Logo = styled.img`
  margin-bottom: 20px;
`;
const Desc = styled.p`
  font-weight: 200;
`;
const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  z-index: 9999;
  width: 100%;
  @media (max-width: 912px) {
    justify-content: flex-start;
  }
`;
const CenterLeft = styled.div``;
const Title = styled.p`
  margin-bottom: 20px;
`;
const Parag = styled.p`
  margin-top: 10px;
  font-weight: 200;
`;
const CenterRight = styled.div``;
const Right = styled.div`
  flex: 1;
  z-index: 9999;
  @media (max-width: 912px) {
    width: 100%;
  }
`;
const NewsLetter = styled.h1`
  margin-bottom: 20px;
`;
const Inputs = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background: #fff;
  overflow: hidden;
  border-radius: 20px;
  padding: 0 20px;
`;
const Input = styled.input`
  width: 70%;
  padding: 15px;
  border: none;
  outline: none;
  cursor: text;
`;
const Button = styled.button`
  width: 30%;
  padding: 10px;
  border-radius: 20px;
  border: none;
  background: #f94f4f;
  color: #fff;
  :hover {
    background: #f94f4fcc;
    cursor: pointer;
  }
`;

const DownFooter = styled.div`
  display: flex;
  align-items: center;
  margin-top: auto;
  justify-content: space-between;
  position: relative;
  ::after {
    content: "";
    position: absolute;
    top: -50%;
    left: 0%;
    width: 100%;
    background: #aaa;
    height: 2px;
  }
  @media (max-width: 912px) {
    flex-direction: column;
    justify-content: center;
  }
`;
const Links = styled.div`
  i {
    padding: 10px;
    border-radius: 50%;
    background: #aaa;
    cursor: pointer;
    margin-right: 20px;
    color: #000;
    font-weight: 700;
  }
`;
const FooterDesc = styled.p``;
