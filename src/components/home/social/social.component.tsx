import { Icon, Link } from 'components-styled'
import { socialNetwork } from 'const'

export const Social = () => {
  return (
    <>
    { socialNetwork.map(({ href, icon, name }) =>
      <Link key={name} href={href} target='_blank'>
        <Icon className={icon}/>
      </Link>
    )}
    </>
  )
}
