import { Body1, Button, Card, CardTitle, Div, Grid, Icon } from "components-styled"
import { useI18n } from "context/i18n";

const currentYear = new Date().getFullYear();

const info = [
  {
    title: 'about.experience',
    description: `about.yearsExperience`,
    icon: 'uil uil-bag',
    years: currentYear - 2021
  },
  {
    title: 'Frontend',
    description: 'React',
    icon: 'uil uil-brackets-curly'
  },
  {
    title: 'Backend',
    description: '.Net Core',
    icon: 'uil uil-lock'
  },
]

export const AboutInfo = () => {

  const { translate } = useI18n();

  return (
    <Grid
      container
      spacing={{ md: 'sm', xs: 'xs' }}
      style={{ justifyContent: 'space-between' }}
    >
      { info.map(({ description, icon, title, years } ) => 
        <CardInfo key={title} description={translate(description, { years: 4 }, description)} title={translate(title)} icon={icon}/>
      )}
      <Grid item col={12}>
        <Body1>{translate('about.introduction')}
        </Body1>
      </Grid>
      <Grid item col={12}>
        <a download href='/src/assets/Luis Aguayza CV.docx.pdf'>
          <Button fullwidth={{ xs: true, md: false }}>
            {translate('about.downloadCV')} <Icon className="uil uil-file-alt"/>
          </Button>
        </a>
      </Grid>
    </Grid>
  )
}

const CardInfo = ({ description, title, icon }: { title: string; description: string; icon: string; }) => (
  <Grid item col={{ sm: 3.5 }} style={{ textAlign: 'center' }}>
    <Card>
      <Div>
        <Icon className={icon} />
        <CardTitle>{title}</CardTitle>
        <Body1>{description}</Body1>
      </Div>
    </Card>
  </Grid>
)