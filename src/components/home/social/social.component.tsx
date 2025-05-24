import { Grid, Icon, Link } from 'components-styled'
import { SITE_INFO } from 'const/site-info'

export const Social = () => {
  return (
    <Grid
      item
      spacing='sm'
      col={{ sm: 12, md: 1 }}
      direction={{ sm: 'row', lg: 'column' }}
      style={{
        justifyContent: 'center',
      }}
    >
      <Link href={SITE_INFO.github} className='home__social-icon ' target='_blank'>
        <Icon className='uil uil-instagram'/>
      </Link>
      <Link href={SITE_INFO.github} className='home__social-icon' target='_blank'>
        <Icon className='uil uil-dribbble'/>
      </Link>
      <Link href={SITE_INFO.github} className='home__social-icon' target='_blank'>
        <Icon className='uil uil-github-alt'/>
      </Link>
    </Grid>
  )
}
