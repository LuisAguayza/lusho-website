import { CardTitle, Grid, Img, SectionContainer, Title } from "components-styled"
import { ProfileWrapperSquare } from "components/home"
import { AboutInfo } from "./components"

export const About = () => {
  return (
    <SectionContainer id='about'>
      <Title style={{ textAlign: 'center', marginBottom: 0 }}>About Me</Title>
      <CardTitle style={{ textAlign: 'center', marginTop: 1}}>My introduction</CardTitle>
      <Grid container spacing={{ xs: 'xs', md: 'xl' }}>
        <Grid item col={{ sm: 0, md: 3 }}>
          <ProfileWrapperSquare>
            <Img src='/src/assets/Lusho.jpg' alt='lusho' />
          </ProfileWrapperSquare>
        </Grid>
        <Grid item col={{ sm: 12, md: 8 }}>
          <AboutInfo />
        </Grid>
      </Grid>
    </SectionContainer>
  )
}
