import { SectionContainer } from 'components-styled';
import styled from 'styled-components';

export const HomeContainer = styled(SectionContainer)`
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-top: calc(${({theme}) => theme.spacing.xs} + 6rem);
  }
`;

export const ProfileWrapper = styled.div`
  width: 250px;
  height: 250px;
  border: 2px solid ${({ theme }) => theme.color.secondary};
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 180px;
    height: 180px;
  }
`;

export const ProfileWrapperSquare = styled.div`
  width: 'auto';
  height: '100%';
  border: 2px solid ${({ theme }) => theme.color.secondary};
  border-radius: 2%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    display: none
  }
`;


