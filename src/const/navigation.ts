import { SITE_INFO } from "const";

interface AppLink {
  name: string;
  href: string;
  icon: string;
}

export const headerLinks: AppLink[] = [
  {
    icon: 'uil uil-estate',
    href: '#home',
    name: 'Home'
  },
  {
    icon: 'uil uil-user',
    href: '#about',
    name: 'About'
  },
  {
    icon: 'uil uil-arrow',
    href: '#skills',
    name: 'Skills'
  },
  {
    icon: 'uil uil-message',
    href: '#contact',
    name: 'Contact'
  }
]

const { github, linkedin, twitter } = SITE_INFO;
export const socialNetwork: AppLink[] = [
  {
    icon: 'uil uil-linkedin',
    href: linkedin,
    name: 'Linkedin'
  },
  {
    icon: 'uil uil-github',
    href: github,
    name: 'Github'
  },
  {
    icon: 'uil uil-twitter',
    href: twitter,
    name: 'Twitter'
  },
]