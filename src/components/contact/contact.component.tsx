import { CardTitle, Grid, SectionContainer, Subtitle, Title } from "components-styled"
import { ContactForm, ContactInfo } from "./components"
import { useI18n } from "context/i18n"

export const ContactComponent = () => {

  const { translate } = useI18n();

  return (
    <SectionContainer id='contact'>
      <Title style={{ textAlign: 'center', marginBottom: 0 }}>{translate('title.contact')}</Title>
      <CardTitle style={{ textAlign: 'center', marginTop: 1}}>{translate('contact.subtitle')}</CardTitle>
      <Grid
        container
        direction={{ xs: 'column', md: 'row' }}
        spacing={{ xs: 'md', md: 'md' }}
        style={{ justifyContent: 'space-between', textAlign: 'center' }}
      >
        <Grid item col={{ sm: 12, md: 5 }}>
          <Subtitle>{translate('contact.talkToMe')}</Subtitle>
          <ContactInfo />
        </Grid>
        <Grid item col={{ sm: 12, md: 5 }}>
          <Subtitle>{translate('contact.sendMessage')}</Subtitle>
          <ContactForm />
        </Grid>
      </Grid>
    </SectionContainer>
  )
}
