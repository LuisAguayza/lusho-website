import { Body1, Button, Div, Grid, Icon, SubSubtitle, Title } from 'components-styled'
import { useI18n } from 'context/i18n'

export const Data = () => {

  const { translate } = useI18n();

  return (
    <Div>
      <Title>
        {`Luis Aguayza`}
      </Title>
      <SubSubtitle>{translate('home.subtitle')}</SubSubtitle>
      <Body1>{translate('home.description')}</Body1>
      <a href='#contact'>
        <Button fullwidth={{ xs: true, md: false }}>
            Contact me <Icon className='uil uil-message'/>
        </Button>
      </a>
    </Div>
  )
}
