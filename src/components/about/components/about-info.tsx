import { Body1, Card, CardTitle, Div, Grid, Icon } from "components-styled"


const currentYear = new Date().getFullYear();

const info = [
  {
    title: 'Experience',
    description: `${currentYear - 2021}+ years`,
    icon: 'uil uil-bag'
  },
  {
    title: 'Frontend',
    description: 'Javascript, React',
    icon: 'uil uil-brackets-curly'
  },
  {
    title: 'Backend',
    description: 'C#, .Net',
    icon: 'uil uil-lock'
  },
]

export const AboutInfo = () => {
  return (
    <Grid container style={{ justifyContent: 'space-between' }} spacing={{ md: 'xs', sm: 'xl' }}>
      { info.map(({ description, icon, title }) => 
        <CardInfo key={title} description={description} title={title} icon={icon}/>
      )}
      <Grid item col={12}>
        <Body1>
          Frontend with experience in designing and building scalable web applications using React and TypeScript. Specialized in
          developing modular, high-performance user interfaces with a strong focus on maintainability, accessibility, and modern UI/UX
          principles.
        </Body1>
      </Grid>
    </Grid>
  )
}

const CardInfo = ({ description, title, icon }: { title: string; description: string; icon: string; }) => (
  <Grid item col={{ sm: 12, md: 3.5 }} style={{ textAlign: 'center' }}>
    <Card>
      <Div>
        <Icon className={icon}/>
        <CardTitle>{title}</CardTitle>
        <Body1>{description}</Body1>
      </Div>
    </Card>
  </Grid>
)