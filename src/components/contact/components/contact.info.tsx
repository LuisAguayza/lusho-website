import { Body1, Button, Card, CardTitle, Div, Grid, Icon, SubSubtitle, Subtitle, Tooltip } from "components-styled"

interface IMyInfo {
  icon: string;
  title: string;
  description: string;
  link?: string;
}

const info: IMyInfo[] = [
  {
    icon: 'uil-envelope',
    title: 'Email',
    description: 'luis31aguayza@gmail.com',
  },
  {
    icon: 'uil-whatsapp',
    title: 'Email',
    description: '+593 985 608 463',
    link: 'https://wa.me/593985608463?text=Hello%20Luis',
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
