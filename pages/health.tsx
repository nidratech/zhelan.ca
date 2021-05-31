import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import styled from 'styled-components';

import { Container } from 'components';

const Health: NextPage = () => {
  return (
    <Container>
      <NextSeo
        title="Zhelan Cardigans - Health"
        description="Health information of Zhelan Cardigans."
        canonical="https://www.zhelan.ca/health"
        openGraph={{
          title: 'Zhelan Cardigans - Health',
          description: 'Health information of Zhelan Cardigans.',
          url: 'https://www.zhelan.ca/health',
        }}
      />

      <ImagesContainer>
        <DoggyImg src="images/boola2.jpg" alt="Boola portrait" />
      </ImagesContainer>

      <HealthBody>
        I am happy to report that our girl Boola aka CANCH Maksherri Baiya Morna CA, SDIN, S has
        great genetic health results and Orthopedic Federation of America (OFA) qualified her for a
        CHIC#154055.
        <SpacerSection>
          Boola&apos;s OFA profile is open to the public and can be seen here:
          <br />
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.ofa.org/advanced-search?f=sr&appnum=2169987"
          >
            https://www.ofa.org/advanced-search?f=sr&appnum=2169987
          </a>
        </SpacerSection>
        <ul>
          <li>DM - Clear</li>
          <li>PRA - Clear</li>
          <li>EIC - Clear</li>
          <li>Fluffy - Clear</li>
          <li>E-Locus -Clear</li>
          <li>Elbows - Normal</li>
          <li>Hips - GOOD</li>
        </ul>
      </HealthBody>
    </Container>
  );
};

const SpacerSection = styled.div`
  margin: ${({ theme }) => `${theme.space.medium} 0`};
`;
const HealthBody = styled.div`
  font-size: 1.2em;
  margin-top: ${({ theme }) => theme.space.large};
  color: ${({ theme }) => theme.color.white};
`;
const DoggyImg = styled.img<{ hideMobile?: boolean }>`
  width: 40%;
  max-width: 325px;
  min-width: 250px;
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

export default Health;
