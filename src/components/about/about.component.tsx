import { CardTitle, Grid, Img, SectionContainer, Title } from "components-styled"
import { ProfileWrapperSquare } from "components/home"
import { AboutInfo } from "./components"
import { useI18n } from "context/i18n"

export const About = () => {

  const { translate } = useI18n();

  return (
    <SectionContainer id='about'>
      <Title style={{ textAlign: 'center', marginBottom: 0 }}>{translate('title.about')}</Title>
      <CardTitle style={{ textAlign: 'center', marginTop: 1}}>{translate('about.subtitle')}</CardTitle>
      <Grid container spacing={{ xs: 'xs', md: 'xl' }}>
        <Grid item col={{ sm: 0, md: 3 }}>
          <ProfileWrapperSquare>
            <Img src='/images/Lusho.jpg' alt='lusho' />
          </ProfileWrapperSquare>
        </Grid>
        <Grid item col={{ sm: 12, md: 8 }}>
          <AboutInfo />
        </Grid>
      </Grid>
    </SectionContainer>
  )
}
