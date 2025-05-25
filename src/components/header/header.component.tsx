import { Link } from 'components-styled';
import { Header, IconHeader, List, ListItem, Nav, NavLogo, NavMenu } from 'components/header';
import { useState } from 'react';

export const HeaderLayout = () => {

	const [isHide, setIsHide] = useState(false);
	const toggleHide = () => setIsHide(prev => !prev);

	return (
		<Header>
			<Nav>
				<NavLogo>
          {`Lusho`}
        </NavLogo>
				<NavMenu isHide={isHide}>
					<List>
						<ListItem>
				 			<Link href='#home'>
								<IconHeader />
								Home
							</Link>
						</ListItem>
            <ListItem>
							<Link href='#about'>
								<IconHeader />
								About
							</Link>
						</ListItem>
						<ListItem>
							<Link href='#skills'>
								<IconHeader></IconHeader>
								Skills
							</Link>
            </ListItem>
						{/* 
						<ListItem>
							<Link>
								<IconHeader className='uil uil-estate'></IconHeader>
								Home
							</Link>
						</ListItem>
						<ListItem>
							<Link>
								<IconHeader className='uil uil-estate'></IconHeader>
								Home
							</Link>
						</ListItem> */}
					</List>
				</NavMenu>
				<IconHeader
          className={isHide ? 'uil uil-times' : 'uil uil-apps'}
          onClick={toggleHide} 
          position='absolute'
        />
			</Nav>
		</Header>
	)
};
