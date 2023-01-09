import { Header, Icon, Link, List, ListItem, Nav, NavLogo, NavMenu } from 'components/header/header.styled';
import { useLayout } from 'hooks';

export const HeaderLayout = () => {

	const { isHide, toggleHide } = useLayout();

	return (
		<Header>
			<Nav>
				<NavLogo>Lusho</NavLogo>
				<NavMenu isHide={isHide}>
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
						<Icon as='div' onClick={toggleHide}>
							<Icon className='uil uil-times' position='absolute' />
						</Icon>
					</List>
				</NavMenu>
				<Icon className='uil uil-apps' onClick={toggleHide} />
			</Nav>
		</Header>
	)
};
