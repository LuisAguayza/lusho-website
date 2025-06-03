import { Body1, Button, Card, CardTitle, Div, Grid, Icon, TextButton, Tooltip } from "components-styled";
import { SITE_INFO } from "const";
import { useI18n } from "context/i18n";

interface IMyInfo {
  icon: string;
  title: string;
  description: string;
  link?: string;
  intl?: string;
}

const { email, whatsapp, whatsappMessage } = SITE_INFO;

const info: IMyInfo[] = [
  {
    icon: 'uil-envelope',
    title: 'Email',
    description: email,
  },
  {
    icon: 'uil-whatsapp',
    title: 'Whatsapp',
    description: whatsapp,
    link: whatsappMessage,
    intl: 'contact.sendWhatsapp'
  },
]

export const ContactInfo = () => {

  const { translate } = useI18n();

  return (
    <Grid
      container
      spacing={{ xs: 'md', md: 'lg' }}
      direction={{ xs: 'row', md: 'column' }}
      style={{ justifyContent: 'space-between', width: '100%' }}
    >
    { info.map((info, index) =>
      <CardInfo key={index} {...info} intl={translate(info.intl ?? '')} />
    )}
    </Grid>
  )
}

const CardInfo = ({
  description,
  icon,
  title,
  link,
  intl
}: IMyInfo) => (
  <Grid item col={12} style={{ textAlign: 'center' }}>
    <Card>
      <Div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Icon className={icon} />
        <CardTitle>{title}</CardTitle>
        <Body1 style={{ marginTop: 0 }}>{description}</Body1>
        { link &&
          <a href={link} target='_blank'>
            <TextButton>{intl}</TextButton>
          </a>
        }
      </Div>
    </Card>
  </Grid>
)
