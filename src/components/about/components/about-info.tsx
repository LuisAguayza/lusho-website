import { Body1, Card, CardTitle, Div, Grid, Icon } from "components-styled"



const info = [
  {
    title: 'Experience',
    description: '3+ years',
    icon: 'uil uil-bag'
  },
  {
    title: 'Frontend',
    description: '3+ years',
    icon: 'uil uil-brackets-curly'
  },
  {
    title: 'Backend',
    description: '3+ years',
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
          principles. Experienced in leading frontend development within agile teams, ensuring smooth integration with backend systems,
          optimizing UI performance, and implementing responsive design solutions. Skilled in modern, responsive web design with a focus
          on user experience (UX).
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