import styled from 'styled-components';

export const CarouselWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  padding: 1rem 0;

  @media (max-width: 768px) {
    display: none;
  }
`

export const CarouselTrack = styled.div`
  display: flex;
  width: max-content;
  gap: 3rem;
  animation: scroll 30s linear infinite;

  &:hover {
    animation-play-state: paused;
  }

  @keyframes scroll {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`

export const LogoCard = styled.div`
  width: 100px;
  height: 100px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: auto;
    height: 80px;
    transition: filter 0.3s ease, transform 0.3s ease;
    color: ${({ theme }) => theme.color.secondary};
  }

  &:hover svg {
    filter: grayscale(0);
    transform: scale(1.1);
    color: ${({ theme }) => theme.color.card};
  }
`;

export const TechGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: repeat(3, 1fr);
  justify-items: center;
  align-items: center;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: none;
  }
`;

export const TechCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  width: 100%;
  max-width: 150px;
  aspect-ratio: 1 / 1;
  background-color: ${({ theme }) => theme.color.secondary };
  border-radius: 12px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  }

  svg {
    width: auto;
    height: 80px;
    /* max-height: 100%; */
    color: ${({ theme }) => theme.color.secondary};
    transition: transform 0.3s ease, filter 0.3s ease, color 0.3s ease;
    filter: grayscale(1);
  }

  &:hover svg {
    filter: grayscale(0);
    transform: scale(1.1);
    color: ${({ theme }) => theme.color.card};
  }
`;