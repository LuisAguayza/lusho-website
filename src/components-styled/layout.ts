import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.text};
  transition: all .2s linear;
  height: 100vh;
  padding-right: ${({ theme }) => theme.spacing.lg};
  padding-left: ${({ theme }) => theme.spacing.lg};
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding-right: ${({ theme }) => theme.spacing.md};
    padding-left: ${({ theme }) => theme.spacing.md};
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    padding-right: ${({ theme }) => theme.spacing.sm};
    padding-left: ${({ theme }) => theme.spacing.sm};
  }
`;

export const Button = styled.button`
  border: none;
  outline: none;
  cursor: pointer;

  background-color: ${({ theme }) => theme.color.titleAlternative};
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: ${({ theme }) => theme.color.primary};
  cursor: pointer;
  font-family: inherit;
  font-size: 14px;
  height: 37px;
  list-style: none;
  margin: 0;
  padding: 10px 16px;
  text-decoration: none;
  transition: color 100ms;    
`;

export const Icon = styled.i`
  display: block;
  transition: all .2s linear;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1.2rem;
    right: 1.3rem;
    bottom: .5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.color.title};
    &:hover {
		  color: ${({ theme }) => theme.color.titleAlternative};
	  }
  }
`;

export const Link = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
	cursor: pointer;
  font-size: ${({ theme }) => theme.typography.small};
	font-weight: ${({ theme }) => theme.fontWeight.medium};
	transition: all .2s linear;
	&:hover {
		color: ${({ theme }) => theme.color.titleAlternative};
	}
`;