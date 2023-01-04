import { Container } from 'components-styled';
import { Header, Icon, Link, List, ListItem, Nav, NavLogo, NavMenu } from 'components-styled/header';
import React from 'react'

export const HeaderLayout = () => {
	return (
		<Header>
			<Nav>
				<NavLogo>Lusho</NavLogo>
				<NavMenu>
					<List>
						<ListItem>
							<Link>
								<Icon className='uil uil-estate' />
								Home
							</Link>
						</ListItem>
						<ListItem>
							<Link>
								<Icon className='uil uil-estate'></Icon>
								Home
							</Link>
						</ListItem>
						<ListItem>
							<Link>
								<Icon className='uil uil-estate'></Icon>
								Home
							</Link>
						</ListItem>
					</List>
				</NavMenu>
			</Nav>
		</Header>
	)
};
