import { Grid, Img } from "components-styled"
import { Data } from "./data"
import { HomeContainer, ProfileWrapper } from "./home.styled"
import { Social } from "./social"

export const Home = () => {
	return (
		<HomeContainer id='home'>
      <Grid
        container
        spacing={{ sm: 'md', lg: 'lg' }}
        direction={{ sm: 'column', md: 'row' }}
      >
        <Grid
          item
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
        <Grid item col={{ sm: 12, md: 3 }} style={{ display: 'flex', justifyContent: 'center' }}>
          <ProfileWrapper>
            <Img src='/src/assets/Lusho.jpg' alt='lusho' />
          </ProfileWrapper>
        </Grid>
      </Grid>
    </HomeContainer>
	)
}
