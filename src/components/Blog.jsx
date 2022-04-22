import styled from "styled-components";
import { blog } from "../data";

const Blog = () => {
  return (
    <Container>
      <Title>Blog</Title>
      <Desc>From The Blog</Desc>
      <Cards>
        {blog.map((i, index) => (
          <Card>
            <Img src={i.img} />
            <Date>
              <Author>By: Musharof Chowdury</Author>
              <Day>15 June 2024</Day>
            </Date>
            <CardTitle>{i.title}</CardTitle>
            <Link>Read More</Link>
          </Card>
        ))}
      </Cards>
    </Container>
  );
};

export default Blog;

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

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 300px);
  justify-content: center;
  gap: 40px;
  @media (max-width: 912px) {
    grid-template-columns: repeat(2, 300px);
  }
  @media (max-width: 768px) {
    grid-template-columns: 80%;
  }
`;
const Card = styled.div`
  border-radius: 10px;
  overflow: hidden;
`;
const Img = styled.img`
  width: 100%;
  object-fit: cover;
`;
const Date = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px;
`;
const Author = styled.p`
  font-size: 14px;
`;
const Day = styled.p`
  font-size: 14px;
`;
const CardTitle = styled.h1`
  font-size: 1.5rem;
  margin: 10px;
  font-weight: 500;
  :hover {
    color: #f94f4f;
    transition: all 0.2s ease;
  }
`;
const Link = styled.p`
  margin: 10px;
`;
