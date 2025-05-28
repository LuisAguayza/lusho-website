import { CardTitle, Grid, SectionContainer, Subtitle, Title } from "components-styled"
import { ContactForm, ContactInfo } from "./components"

export const ContactComponent = () => {
  return (
    <SectionContainer id='contact'>
      <Title style={{ textAlign: 'center', marginBottom: 0 }}>Contact</Title>
      <CardTitle style={{ textAlign: 'center', marginTop: 1}}>Contact Me</CardTitle>
      <Grid
        container
        direction={{ xs: 'column', md: 'row' }}
        spacing={{ xs: 'md', md: 'md' }}
        style={{ justifyContent: 'space-between', textAlign: 'center' }}
      >
        <Grid item col={{ sm: 12, md: 5 }}>
          <Subtitle>Talk to me</Subtitle>
          <ContactInfo />
        </Grid>
        <Grid item col={{ sm: 12, md: 5 }}>
          <Subtitle>Send me a message</Subtitle>
          <ContactForm />
        </Grid>
      </Grid>
    </SectionContainer>
  )
}
