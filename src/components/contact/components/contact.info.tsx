import { Body1, Card, CardTitle, Div, Grid, Icon, Tooltip } from "components-styled";
import { SITE_INFO } from "const";

interface IMyInfo {
  icon: string;
  title: string;
  description: string;
  link?: string;
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
    title: 'Email',
    description: whatsapp,
    link: whatsappMessage,
  },
]

export const ContactInfo = () => {
  return (
    <Grid
      container
      spacing={{ xs: 'md', md: 'xl' }}
      direction={{ xs: 'row', md: 'column' }}
      style={{ justifyContent: 'space-between', width: '100%' }}
    >
    { info.map((info, index) =>
      info.link
      ? <Tooltip key={index} label={'Click to open link'}>
         <a href={info.link} target='_blank' rel='noopener noreferrer'>
          <CardInfo {...info} />
         </a>
        </Tooltip>
      : <CardInfo key={index} {...info}/>
    )}
    </Grid>
  )
}

const CardInfo = ({
  description,
  icon,
  title,
}: IMyInfo) => (
  <Grid item col={12} style={{ textAlign: 'center' }}>
    <Card style={{ cursor: 'pointer' }}>
      <Div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Icon className={icon} />
        <CardTitle>{title}</CardTitle>
        <Body1 style={{ marginTop: 0 }}>{description}</Body1>
      </Div>
    </Card>
  </Grid>
)
