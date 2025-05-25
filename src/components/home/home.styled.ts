import styled from 'styled-components';

export const Section = styled.section`

`;

export const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  max-width: ${({ theme }) => theme.breakpoints.xl};
  margin-inline: auto;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-top: 100px;
    padding-inline: ${({ theme }) => theme.spacing.md};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding-inline: ${({ theme }) => theme.spacing.lg};
  }
`;

export const ProfileWrapper = styled.div`
  width: 250px;
  height: 250px;
  border: 5px solid ${({ theme }) => theme.color.secondary};
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
  border: 5px solid ${({ theme }) => theme.color.secondary};
  border-radius: 5%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    display: none
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;


