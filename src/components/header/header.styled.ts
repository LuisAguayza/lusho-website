import { Container, Icon } from "components-styled";
import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${({ theme }) => theme.zIndex.fixed};
  background-color: ${({ theme }) => theme.color.body};
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    top: initial;
    bottom: 0;
  }
`;

export const Nav = styled(Container)`
  height: calc(${({theme}) => theme.spacing.max} + 1.5rem);
	display: flex;
	justify-content: space-between;
	align-items: center;
	column-gap: 1rem;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    height: ${({theme}) => theme.spacing.max} 
  }
`;

export const NavLogo = styled(Nav)`
	color: ${({ theme }) => theme.color.title};
	font-weight: ${({ theme }) => theme.fontWeight.medium};
  padding-left: 0;
`;

export const List = styled.ul`
  display: flex;
  column-gap: 2rem;
	list-style-type: none;
  margin: 0;
  padding: 0;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    column-gap: 0;
  }
`;

export const ListItem = styled.li`
  /* background-color: ${({ theme }) => theme.color.primary}; */
  transition: all .5s linear;
`;

export const IconHeader = styled(Icon)<{ position?: 'absolute' }>`
  display: none;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
    position: ${props => props.position};
  }
`;

export const NavMenu = styled.div<{ isHide: boolean }>`
  background-color: ${({ theme }) => theme.color.primary};
  transition: all .5s linear;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    position: fixed;
    bottom: ${(props) => props.isHide ? 0 : '-100%'};
    left: 0;
    width: 100%;
    background-color: ${({ theme }) => theme.color.body};
    padding: 2rem 1.5rem 4rem;
    box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.15);
    border-radius: 1.5rem 1.5rem 0 0;
    transition: all .5s linear;
  };
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    padding: 2rem 0.25rem 4rem;
  }
`;





