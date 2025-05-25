import { Card, CardTitle, Div, DivCentered, Grid, Label, SectionContainer, SubSubtitle, Title } from "components-styled"
import { Img, ProfileWrapper, ProfileWrapperSquare } from "components/home"
import { AboutInfo } from "./components"

export const About = () => {
  return (
    <SectionContainer>
      <DivCentered
        style={{
          flexDirection: 'column'
        }}
      >
        <Title style={{ textAlign: 'center' }}>About Me</Title>
        <CardTitle style={{ textAlign: 'center' }}>My introduction</CardTitle>
        <Grid container  spacing='xl'>
          <Grid item col={{ sm: 0, md: 4 }}>
            <ProfileWrapperSquare>
              <Img src='/src/assets/Lusho.jpg' alt='lusho' />
            </ProfileWrapperSquare>
          </Grid>
          <Grid item col={{ sm: 12, md: 7 }}>
            <AboutInfo />
          </Grid>
        </Grid>
      </DivCentered>
    </SectionContainer>
  )
}
