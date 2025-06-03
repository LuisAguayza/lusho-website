import { Div, Link } from 'components-styled';
import { Header, IconHeader, List, ListItem, Nav, NavLogo, NavMenu, ThemeIcon, ThemeLabel } from 'components/header';
import { LanguageToggle } from 'components/language';
import { headerLinks } from 'const';
import { useI18n } from 'context/i18n';
import { useState } from 'react';
import { useTheme } from 'theme';

export const HeaderLayout = () => {

	const [isHide, setIsHide] = useState(false);
	const toggleHide = () => setIsHide(prev => !prev);
  const { isDarkTheme, toggleTheme } = useTheme();
  const { changeLanguage, translate ,currentLanguage } = useI18n();

	return (
		<Header>
			<Nav>
				<NavLogo>
          <Link href='#home'>Lusho</Link>
        </NavLogo>
				<NavMenu isHide={isHide}>
					<List>
            { headerLinks.map(({ href, icon, name, intl = ''}) =>
              <ListItem key={name}>
                <Link href={href}>
                  <IconHeader className={icon} />
                  {translate(intl)}
                </Link>
              </ListItem>
            )}
            <ListItem onClick={toggleTheme}>
              <Div style={{
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer'
              }}>
                <ThemeIcon className={isDarkTheme ? 'uil uil-moon' : 'uil uil-sun'} />
                <ThemeLabel>{translate('utils.mode')}</ThemeLabel>
              </Div>
            </ListItem>
            <ListItem onClick={changeLanguage}>
              <LanguageToggle
                currentLang={currentLanguage}
              />
            </ListItem>
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
