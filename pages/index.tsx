import { NextPage } from 'next';
import styled from 'styled-components';

const Home: NextPage = () => {
  return (
    <CenteredContainer>
      <StyledImg src="boola.jpg" alt="Boola pic" />
    </CenteredContainer>
  );
};

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const StyledImg = styled.img`
  height: 100vh;
`;

export default Home;
