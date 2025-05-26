import { CSharp, CSS, Docker, Git, HTML, Javascript, MUI, MYSQL, NetCore, NextJS, React, Redux, StyledComponents, Typescript } from "assets";
import { ReactNode } from "react";

interface Skill2 {
  name: string;
  Component: ReactNode;
}

export const mySkills: Skill2[] =  [
  {
    name: 'C#',
    Component: <CSharp />
  },
  {
    name: 'CSS',
    Component: <CSS />
  },
  {
    name: 'Docker',
    Component: <Docker />
  },
  {
    name: 'Git',
    Component: <Git />
  },
  {
    name: 'HTML',
    Component: < HTML/>
  },
  {
    name: 'Javascript',
    Component: <Javascript />
  },
  {
    name: 'Material UI',
    Component: <MUI />
  },
  {
    name: 'MySQL',
    Component: <MYSQL />
  },
  {
    name: '.Net Core',
    Component: <NetCore />
  },
  {
    name: 'Next JS',
    Component: <NextJS />
  },
  {
    name: 'React',
    Component: <React />
  },
  {
    name: 'Redux',
    Component: <Redux />
  },
  {
    name: 'Styled Components',
    Component: <StyledComponents />
  },
  {
    name: 'Typescript',
    Component: <Typescript />
  },
]