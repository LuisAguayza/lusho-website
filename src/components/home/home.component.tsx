import { Grid } from "components-styled"
import { Data } from "./data"
import { HomeContainer, Img, ProfileWrapper } from "./home.styled"
import { Social } from "./social"

export const Home = () => {
	return (
		<HomeContainer id='home'>
      <Grid
        container
        spacing={{ sm: 'sm', xl: 'xl' }}
        direction={{ sm: 'column', md: 'row' }}
      >
        <Grid
          item
          spacing='sm'
          col={{ sm: 12, md: 1 }}
          direction={{ sm: 'row', lg: 'column' }}
          style={{
            justifyContent: 'center',
          }}
        >
          <Social />
        </Grid>
        <Grid item col={{ sm: 12, md: 7 }} direction='column' spacing='xs'>
          <Data />
        </Grid>
        <Grid item col={{ sm: 12, md: 3 }} style={{ alignSelf: 'center' }}>
          <ProfileWrapper>
            <Img src='/src/assets/Lusho.jpg' alt='lusho' />
          </ProfileWrapper>
        </Grid>
      </Grid>
    </HomeContainer>
	)
}
