import styled from "styled-components";
import * as colors from "theme";
import { styles } from "theme";
import { Container } from "./layout";

export const Header = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${styles.zIndex.fixed};
  background-color: ${colors.bodyColor};
`;

export const Nav = styled(Container)`
  height: calc(${styles.headerHeight} + 1.5rem);
	display: flex;
	justify-content: space-between;
	align-items: center;
	column-gap: 1rem;
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
`;

export const ListItem = styled.li`
  background-color: ${colors.containerColor};
  transition: all 0.25s ease;
`;

export const Icon = styled.i`
  display: none;
`;

export const NavMenu = styled.div`
  background-color: ${colors.containerColor};
  transition: all 0.25s ease;
`;





