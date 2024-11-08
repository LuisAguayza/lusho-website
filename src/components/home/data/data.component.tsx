import { Typography } from 'components-styled'
import { Grid } from '../'

export const Data = () => {
  return (
    <Grid className='home__data'>
      <Typography className='home__title'>
        {`Luis Alberto Chuquiguanga Aguayza`}
        {/* TODO: Add hello icon"*/}
      </Typography>
      <h3 className='home__subtitle'>
        {`FrontEnd Developer`}
      </h3>
      <p>{`I'm software developer based in Cuenca - Ecuador, and I'm very passionate and dedicated to my work.`}</p>
      <a href='#contact' className='button button--flex'>
        {/* {`Say hello!`} */}
        {/* TODO: Add send icon --svg: fill="var(--container-color)"*/}
      </a>
    </Grid>
  )
}
