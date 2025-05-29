import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding-inline: calc(${({ theme }) => theme.spacing.sm} + 0.5rem);
    padding-top: 0;
  }
`;

export const Main = styled.main`
  color: ${({ theme }) => theme.color.text};
  height: 100%;
  background-color: ${({ theme }) => theme.color.primary};
`;

export const SectionContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: ${({ theme }) => theme.breakpoints.xl};
  margin-inline: auto;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-top: ${({ theme }) => theme.spacing.lg};
    padding-inline: ${({ theme }) => theme.spacing.sm};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-block: calc(${({theme}) => theme.spacing.lg});
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Icon = styled.i`
  font-size: 1.6rem;
`;

export const Link = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
	cursor: pointer;
  font-size: ${({ theme }) => theme.typography.small};
	font-weight: ${({ theme }) => theme.fontWeight.medium};
	&:hover {
		color: ${({ theme }) => theme.color.title};
	}
`;

export const Div = styled.div``;

export const DivCentered = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center
`;

export const Card = styled.div`
  border-radius: 15px;
  border: 2px solid;
  border-color: ${({ theme }) => theme.color.card};
  padding: ${({ theme }) => theme.spacing.xs};
  display: flex;
  flex-direction: column;
  gap: 1rem;

  &:hover {
    box-shadow: 0 0 0 1px ${({ theme }) => theme.color.titleAlternative};
    transform: translateY(-2px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: .5rem;
    border-radius: 12px;
  }
`;

export const Form = styled.form``;