import { Icon, Link, Title } from 'components-styled';
import { FooterContainer, FooterContent, FooterLinks, FooterText } from '.';
import { socialNetwork } from 'const';
import { useI18n } from 'context/i18n';

export const Footer = () => {

  const { translate } = useI18n();

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
        <FooterText>© {new Date().getFullYear()} Lusho. {translate('footer.rights')}</FooterText>
      </FooterContent>
    </FooterContainer>
  )
}
