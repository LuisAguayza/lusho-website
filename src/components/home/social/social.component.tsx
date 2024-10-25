import { Icon, Link } from 'components-styled'
import { Grid } from 'components/home/home.styled'
import { SITE_INFO } from 'const/site-info'

export const Social = () => {
  return (
    <Grid>
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
