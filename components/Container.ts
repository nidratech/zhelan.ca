import styled, { css } from 'styled-components';

export default styled.div<{ isCentered?: boolean }>`
  max-width: 60rem;
  min-width: 30rem;
  margin: ${({ theme }) => `${theme.space.medium} auto ${theme.space.large}`};
  padding: ${({ theme }) => `0 ${theme.space.large}`};
  line-height: 1.2;

  ${({ isCentered }) =>
    isCentered &&
    css`
      display: flex;
      align-items: center;
      flex-direction: column;
    `}

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    max-width: none;
    min-width: auto;
    margin: 0 ${({ theme }) => `0 ${theme.space.medium}`};
    padding: ${({ theme }) => `0 ${theme.space.medium}`};
  }
`;
