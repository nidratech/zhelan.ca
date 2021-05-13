import { NextPage } from 'next';
import styled from 'styled-components';

const Home: NextPage = () => {
  return (
    <Container>
      <a href="https://www.facebook.com/profile.php?id=100010647843215">
        <StyledImg src="boola.jpg" alt="Boola pic" />
      </a>

      <ContactContainer>
        <ContactHeader>Get in Touch</ContactHeader>
        <a href="tel:+17788816864">(778) 881-6864</a>
        <a href="mailto:zhelancardigans@gmail.com">zhelancardigans@gmail.com</a>
      </ContactContainer>
    </Container>
  );
};

const ContactHeader = styled.h1`
  margin-bottom: 0.25rem;
  font-size: 1.3rem;
  color: white;
`;
const ContactContainer = styled.div`
  text-align: center;
  display: grid;
  margin-top: 3rem;
  grid-gap: 0.2rem;
`;
const Container = styled.div`
  background-color: #363636;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const StyledImg = styled.img`
  height: 50vh;
  border-radius: 40%;
  min-height: 10rem;
  max-height: 13rem;
`;

export default Home;
