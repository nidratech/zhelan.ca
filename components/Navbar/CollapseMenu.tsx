import { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useTransition, animated } from 'react-spring';
import Link from 'next/link';
import { darken } from 'polished';
import { useRouter } from 'next/router';

interface Props {
  isNavbarOpen: boolean;
  setIsNavbarOpen: (...args: any[]) => void;
}

const CollapseMenu = ({ isNavbarOpen, setIsNavbarOpen }: Props): JSX.Element => {
  const { pathname } = useRouter();
  const ref = useRef<HTMLInputElement>(null);

  const transition = useTransition(isNavbarOpen, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  useEffect(() => {
    const menuToggle = document.querySelector('#menu-toggle');
    const handleClickOutside = (event: Event) => {
      if (
        isNavbarOpen && // @ts-ignore wtf typing
        !ref?.current?.contains(event.target) && // @ts-ignore wtf typing
        !menuToggle?.contains(event.target)
      ) {
        setIsNavbarOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, isNavbarOpen]);

  return (
    <>
      {transition(
        (style, item) =>
          item && (
            // @ts-ignore TODO: weird style typing?
            <CollapseWrapper ref={ref} style={style}>
              <NavLinks>
                <li>
                  <Link href={'/'} passHref>
                    <NavItem
                      as="a"
                      title={'Home'}
                      onClick={() => setIsNavbarOpen(false)}
                      isActive={pathname === '/'}
                    >
                      Home
                    </NavItem>
                  </Link>
                </li>

                <li>
                  <Link href={'/about'} passHref>
                    <NavItem
                      as="a"
                      title={'About'}
                      onClick={() => setIsNavbarOpen(false)}
                      isActive={pathname === '/About'}
                    >
                      About
                    </NavItem>
                  </Link>
                </li>

                <li>
                  <Link href={'/puppies'} passHref>
                    <NavItem
                      as="a"
                      title={'Puppies'}
                      onClick={() => setIsNavbarOpen(false)}
                      isActive={pathname === '/Puppies'}
                    >
                      Puppies
                    </NavItem>
                  </Link>
                </li>
              </NavLinks>
            </CollapseWrapper>
          )
      )}
    </>
  );
};

const NavItem = styled.a<{ isActive?: boolean }>`
  display: flex;
  padding: 0 ${({ theme }) => theme.space.medium};
  color: ${({ isActive, theme }) => (isActive ? theme.color.brand : theme.color.grey)};
  justify-content: center;
  min-width: 7rem;

  :hover {
    color: ${({ isActive, theme }) =>
      darken(0.05, isActive ? theme.color.brand : theme.color.grey)};
  }
`;
const CollapseWrapper = styled(animated.div)`
  background: ${({ theme }) => darken(0.05, theme.color.background)};
  position: fixed;
  top: 4.5rem;
  left: 0;
  right: 0;
  z-index: 999;
`;
const NavLinks = styled.ul`
  list-style-type: none;
  padding: 2rem 1rem 2rem 2rem;
  display: flex;
  justify-content: center;

  @media (min-width: ${({ theme }) => theme.breakpoint.mobile}) {
    display: none;
  }
`;

export default CollapseMenu;
