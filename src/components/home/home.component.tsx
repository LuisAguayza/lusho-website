import { Grid } from "components-styled"
import { Data } from "./data"
import { Container } from "./home.styled"
import { Social } from "./social"

export const Home = () => {
	return (
		<Container>
      <Grid container spacing={{ sm: 'sm' }} direction={{ sm: 'column', md: 'row' }}>
        <Social />
        <Data />
      </Grid>
    </Container>
	)
}
