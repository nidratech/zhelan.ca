import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import styled from 'styled-components';

import { Container } from 'components';

const About: NextPage = () => {
  return (
    <Container>
      <NextSeo
        title="Zhelan Cardigans - About"
        description="About Zhelan Cardigans."
        canonical="https://www.zhelan.ca/about"
        openGraph={{
          title: 'Zhelan Cardigans - About',
          description: 'About Zhelan Cardigans.',
          url: 'https://www.zhelan.ca/about',
        }}
      />

      <ImagesContainer>
        <AnnaImg src="images/anna-pose.jpg" alt="Anna with Boola" />
        <AnnaImg hideMobile src="images/anna-pose2.jpg" alt="Anna with Boola 2" />
      </ImagesContainer>

      <AboutBody>
        <AboutIntro>
          Zhelan Cardigans is a Vancouver-based kennel run by Anna Filippova - CKC and CCCC ethical
          breeder.
        </AboutIntro>

        <LinkContainer>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.ckc.ca/Choosing-a-Dog/PuppyList/Breed.aspx?breedname=Cardigan%20Welsh%20Corgi&breedcode=WCC"
          >
            https://www.ckc.ca/Choosing-a-Dog/PuppyList/Breed.aspx?breedname=Cardigan%20Welsh%20Corgi&breedcode=WCC
          </a>
        </LinkContainer>
        <LinkContainer>
          <a target="_blank" rel="noreferrer" href="https://cardigancorgi.ca/breeders/">
            https://cardigancorgi.ca/breeders/
          </a>
        </LinkContainer>
      </AboutBody>
    </Container>
  );
};

const AboutIntro = styled.div`
  font-size: 1.2em;
`;
const LinkContainer = styled.div`
  margin: ${({ theme }) => `${theme.space.small} 0`};
  font-size: 1.1em;
`;
const AboutBody = styled.div`
  margin-top: ${({ theme }) => theme.space.large};
  color: ${({ theme }) => theme.color.white};
`;
const AnnaImg = styled.img<{ hideMobile?: boolean }>`
  width: 40%;
  max-width: 600px;
  min-width: 300px;
  border-radius: ${({ theme }) => theme.borderRadius};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    display: ${({ hideMobile }) => (hideMobile ? 'none' : 'block')};
  }
`;
const ImagesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export default About;
