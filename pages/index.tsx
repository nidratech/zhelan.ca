import { NextPage } from 'next';
import styled from 'styled-components';
import { NextSeo } from 'next-seo';

import { Container } from 'components';

const Home: NextPage = () => {
  return (
    <Container isCentered>
      <NextSeo
        title="Zhelan Cardigans"
        description="Zhelan Cardigans is a Vancouver-based kennel run by Anna Filippova - CKC and CCCC ethical breeder."
        canonical="https://www.zhelan.ca"
        openGraph={{
          title: 'Zhelan Cardigans',
          description:
            'Zhelan Cardigans is a Vancouver-based kennel run by Anna Filippova - a CKC and CCCC ethical breeder.',
          url: 'https://www.zhelan.ca',
        }}
      />

      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.facebook.com/profile.php?id=100010647843215"
      >
        <StyledImg src="images/boola.jpg" alt="Boola pic" />
      </a>

      <ContactContainer>
        <ContactHeader>Get in Touch</ContactHeader>
        {/* <a href="tel:+17788816864">(778) 881-6864</a> */}
        <a href="mailto:zhelancardigans@gmail.com">zhelancardigans@gmail.com</a>

        <SocialMediaContainer>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/profile.php?id=100010647843215"
          >
            <StyledFbImg src="images/facebook-round.png" alt="Facebook" />
          </a>

          <a target="_blank" rel="noreferrer" href="https://instagram.com/annazhelan">
            <StyledFbImg src="images/instagram-logo.png" alt="Instagram" />
          </a>
        </SocialMediaContainer>
      </ContactContainer>
    </Container>
  );
};

const SocialMediaContainer = styled.div`
  margin-top: ${({ theme }) => theme.space.medium};
  display: flex;
  grid-gap: ${({ theme }) => theme.space.medium};
  justify-content: center;
`;
const ContactHeader = styled.h1`
  margin-bottom: 0.5rem;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.color.white};
`;
const ContactContainer = styled.div`
  text-align: center;
  display: grid;
  margin-top: 3rem;
  grid-gap: 0.2rem;
`;
const StyledFbImg = styled.img`
  height: 2rem;
  margin: auto;
  padding: ${({ theme }) => `${theme.space.medium} 0`};
`;
const StyledImg = styled.img`
  height: 50vh;
  margin-top: 10vh;
  border-radius: 40%;
  min-height: 10rem;
  max-height: 13rem;
`;

export default Home;
