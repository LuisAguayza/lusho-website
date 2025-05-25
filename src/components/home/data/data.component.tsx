import { Body1, Button, Div, Grid, Icon, SubSubtitle, Title } from 'components-styled'

export const Data = () => {
  return (
    <Div>
      <Title>
        {`Luis Aguayza`}
      </Title>
      <SubSubtitle>
        {`FrontEnd Developer`}
      </SubSubtitle>
      <Body1>{`I'm software developer based in Cuenca - Ecuador, and I'm very passionate and dedicated to my work.`}</Body1>
      <Button fullwidth={{ xs: true, md: false }}>
        Contact me <Icon className='uil uil-message' style={{ marginLeft: '15px' }}/>
      </Button>
      {/* <a href='#contact'> */}
        {/* {`Say hello!`} */}
        {/* TODO: Add send icon --svg: fill="var(--container-color)"*/}
      {/* </a> */}
    </Div>
  )
}
