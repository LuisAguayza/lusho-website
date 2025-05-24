import styled from 'styled-components';

export const Main = styled.main`
  margin-top: calc(${({theme}) => theme.spacing.lg} + 1.5rem);
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-top: 0;
  }
`;

export const Section = styled.section`

`;

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-inline: auto;
  padding-inline: ${({ theme }) => theme.spacing.sm};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-inline: ${({ theme }) => theme.spacing.md};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding-inline: ${({ theme }) => theme.spacing.lg};
  }
`;
