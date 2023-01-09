import styled from "styled-components";
import * as colors from "theme";
import { styles } from "theme";
import { Container } from "../../components-styled/layout";

export const Header = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${styles.zIndex.fixed};
  background-color: ${colors.bodyColor};
  @media screen and (max-width: ${styles.breakpoints.md}) {
    top: initial;
    bottom: 0;
  }
`;

export const Nav = styled(Container)`
  height: calc(${styles.headerHeight} + 1.5rem);
	display: flex;
	justify-content: space-between;
	align-items: center;
	column-gap: 1rem;
  @media screen and (max-width: ${styles.breakpoints.md}) {
    height: ${styles.headerHeight}
  }
`;

export const NavLogo = styled(Nav)`
	color: ${colors.titleColor};
	font-weight: ${styles.fontWeight.medium};
`;

export const Link = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
	cursor: pointer;
  font-size: ${styles.typography.small};
	font-weight: ${styles.fontWeight.medium};
	transition: .3s;
	&:hover {
		color: ${colors.titleAlternativeColor};
	}
`;

export const List = styled.ul`
  display: flex;
  column-gap: 2rem;
	list-style-type: none;
  margin: 0;
  padding: 0;
  @media screen and (max-width: ${styles.breakpoints.md}) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
  @media screen and (max-width: ${styles.breakpoints.xs}) {
    column-gap: 0;
  }
`;

export const ListItem = styled.li`
  background-color: ${colors.containerColor};
  transition: all 0.25s ease;
`;

type IconProps = {
  position?: 'absolute' | ''; 
}

export const Icon = styled.i<IconProps>`
  display: none;
  @media screen and (max-width: ${styles.breakpoints.md}) {
    display: block;
    font-size: 1.2rem;
    position: ${props => props.position};
    right: 1.3rem;
    bottom: .5rem;
    cursor: pointer;
    color: ${colors.titleColor};
    &:hover {
		  color: ${colors.titleAlternativeColor};
	  }
  }
`;

type Props = {
  isHide: boolean;
}

export const NavMenu = styled.div<Props>`
  background-color: ${colors.containerColor};
  transition: all 0.5s ease;
  @media screen and (max-width: ${styles.breakpoints.md}) {
    position: fixed;
    bottom: ${(props) => props.isHide ? '-100%' : 0};
    left: 0;
    width: 100%;
    background-color: ${colors.bodyColor};
    padding: 2rem 1.5rem 4rem;
    box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.15);
    border-radius: 1.5rem 1.5rem 0 0;
    transition: .5s;
  };
  @media screen and (max-width: ${styles.breakpoints.xs}) {
    padding: 2rem 0.25rem 4rem;
  }
`;





