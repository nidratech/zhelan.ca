import styled from 'styled-components';
import Link from 'next/link';
import { darken } from 'polished';
import { useRouter } from 'next/router';

import BurgerMenu from './BurgerMenu';
import CollapseMenu from './CollapseMenu';

interface Props {
  isNavbarOpen: boolean;
  setIsNavbarOpen: (...args: any[]) => void;
}

const Navbar = ({ isNavbarOpen, setIsNavbarOpen }: Props): JSX.Element => {
  const { pathname } = useRouter();

  return (
    <>
      <NavBar>
        <FlexContainer>
          <Link href={'/'} passHref>
            <NavItem as="a" title={'Zhelan Cardigans'} aria-label={'Zhelan Cardigans'}>
              <img src="images/nav-icon.png" />
            </NavItem>
          </Link>

          <NavLinks>
            <li>
              <Link href={'/'} passHref>
                <NavItem as="a" title={'Home'} isActive={pathname === '/'}>
                  Home
                </NavItem>
              </Link>
            </li>

            <li>
              <Link href={'/about'} passHref>
                <NavItem as="a" title={'About'} isActive={pathname === '/about'}>
                  About
                </NavItem>
              </Link>
            </li>

            <li>
              <Link href={'/puppies'} passHref>
                <NavItem as="a" title={'Puppies'} isActive={pathname === '/puppies'}>
                  Puppies
                </NavItem>
              </Link>
            </li>
          </NavLinks>

          <BurgerWrapper>
            <BurgerMenu isNavbarOpen={isNavbarOpen} setIsNavbarOpen={setIsNavbarOpen} />
          </BurgerWrapper>
        </FlexContainer>
      </NavBar>

      <CollapseMenu isNavbarOpen={isNavbarOpen} setIsNavbarOpen={setIsNavbarOpen} />
    </>
  );
};

const NavItem = styled.a<{ isActive?: boolean }>`
  display: flex;
  padding: 0 ${({ theme }) => theme.space.medium};
  color: ${({ isActive, theme }) => (isActive ? theme.color.brand : theme.color.grey)};
  align-items: center;
  transition: all ${({ theme }) => theme.transitionTime};

  :hover {
    color: ${({ isActive, theme }) =>
      isActive ? darken(0.05, theme.color.brand) : theme.color.brand};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    padding: 0;
  }
`;
const NavBar = styled.nav`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1;
`;
const FlexContainer = styled.div`
  max-width: 120rem;
  display: flex;
  margin: auto;
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.space.medium};
  height: ${({ theme }) => theme.space.navBarHeight};
  background: ${({ theme }) => theme.color.background};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    padding: ${({ theme }) => `0 ${theme.space.small}`};
  }
`;
const NavLinks = styled.ul`
  justify-self: end;
  list-style-type: none;
  margin: auto 0;
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    display: none;
  }
`;
const BurgerWrapper = styled.div`
  margin: auto 0;

  @media (min-width: ${({ theme }) => theme.breakpoint.mobile}) {
    display: none;
  }
`;

export default Navbar;
