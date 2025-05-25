import { Card } from 'components-styled';
import styled from 'styled-components';

export const TechCard = styled(Card)`
  align-items: center;
  justify-content: center;
  padding: 1rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  img {
    max-width: 200px;
    min-width: 100px;
    height: auto;
    transition: transform 0.3s ease;
    /* filter: grayscale(20); */
  }

  &:hover {
    svg {
      transform: scale(1.1);
    }
  }
`;

export const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 1rem;
  justify-items: center;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    gap: 0.75rem;
  }
`;
