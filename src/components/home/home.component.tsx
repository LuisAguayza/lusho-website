import { Social } from "components/home/social"
import { Grid, Section } from "./home.styled"
import { Data } from "./data"

export const Home = () => {
	return (
		<Section>
      <Grid>
        <Grid>
          <Social />
          <Data />
        </Grid>
      </Grid>
    </Section>
	)
}
