import { Icon, Link, Title } from 'components-styled';
import { FooterContainer, FooterContent, FooterLinks, FooterText } from '.';
import { socialNetwork } from 'const';

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <Title>Lusho</Title>
        <FooterLinks>
          { socialNetwork.map(({ href, icon, name }) =>
            <Link key={name} href={href} target='_blank'>
              <Icon className={icon} />
            </Link>
          )}
        </FooterLinks>
        <FooterText>© {new Date().getFullYear()} Lusho. All rights reserved.</FooterText>
      </FooterContent>
    </FooterContainer>
  )
}
