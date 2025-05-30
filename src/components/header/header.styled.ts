import { Main, Icon, Container } from "components-styled";
import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.color.primary};
  z-index: ${({ theme }) => theme.zIndex.fixed};
  padding-inline: calc(${({theme}) => theme.spacing.xl} + 3rem);
  height: calc(${({theme}) => theme.spacing.xl} + 1rem);
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    top: initial;
    bottom: 0;
    padding-inline: calc(${({theme}) => theme.spacing.sm} + 0.5rem);    
    padding-block: calc(${({theme}) => theme.spacing.md} + 0.5rem);    
  }
  `;

export const Nav = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	column-gap: 1rem;
  height: 100%;
  color: ${({ theme }) => theme.color.text};
`;


export const NavLogo = styled(Nav)`
	color: ${({ theme }) => theme.color.title};
	font-weight: ${({ theme }) => theme.fontWeight.medium};
  padding-left: 0;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
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
  text-align: center;
`;

export const IconHeader = styled(Icon).withConfig({
  shouldForwardProp: prop => prop !== 'position'
})<{ position?: 'absolute' }>`
  display: none;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
    position: ${props => props.position};
    right: 1.3rem;
    bottom: .5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.color.title};
    &:hover {
      color: ${({ theme }) => theme.color.titleAlternative};
	  }
  }
`;

export const ThemeLabel = styled.span`
  font-size: ${({ theme }) => theme.typography.small};
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
    width: 100%;
  }
`;

export const ThemeIcon = styled(IconHeader)`
  display: block;    
`;

export const NavMenu = styled.div.withConfig({
  shouldForwardProp: prop => prop !== 'isHide'
})<{ isHide: boolean }>`
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    position: fixed;
    bottom: ${(props) => props.isHide ? 0 : '-100%'};
    left: 0;
    width: 100%;
    background-color: ${({ theme }) => theme.color.body};
    padding: 2rem 1.5rem 4rem;
    box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.15);
    border-radius: 1.5rem 1.5rem 0 0;
    transition: bottom .5s linear;
  };
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    padding: 2rem 0.25rem 4rem;
  }
`;





