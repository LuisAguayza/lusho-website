import { Body1, Grid, SubSubtitle, Title } from 'components-styled'

export const Data = () => {
  return (
    <Grid item col={{ sm: 12, md: 6 }} direction='column' spacing='sm'>
      <div>
      <Title>
        {`Luis Alberto Chuquiguanga Aguayza`}
        {/* TODO: Add hello icon"*/}
      </Title>
      <SubSubtitle>
        {`FrontEnd Developer`}
      </SubSubtitle>
      <Body1>{`I'm software developer based in Cuenca - Ecuador, and I'm very passionate and dedicated to my work.`}</Body1>
      <a href='#contact'>
        {/* {`Say hello!`} */}
        {/* TODO: Add send icon --svg: fill="var(--container-color)"*/}
      </a>

      </div>
    </Grid>
  )
}
