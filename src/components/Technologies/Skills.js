import {
  DiReact,
  DiTerminal,
  DiNodejsSmall,
  DiJavascript1,
} from 'react-icons/di';
import { SiMongodb, SiGit, SiNextdotjs } from 'react-icons/si';

export const Skills = [
  {
    slug: 'React',
    Component: DiReact,
    title: 'React',
    Description: () => <>My go to library I use when develping applications.</>,
  },
  {
    slug: 'nodejs',
    Component: DiNodejsSmall,
    title: 'Node.js',
    Description: () => <>Very straightforward tool I use for every project. </>,
  },
  {
    slug: 'javascript',
    Component: DiJavascript1,
    title: 'Javascript',
    Description: () => <>Main language I use for functionality.</>,
  },
  {
    slug: 'nextdotjs',
    Component: SiNextdotjs,
    title: 'Next.js',
    Description: () => <>My framework of choice.</>,
  },
  {
    slug: 'Mongodb',
    Component: SiMongodb,
    title: 'Mongodb',
    Description: () => <>Most used database in my current stack. </>,
  },
  {
    slug: 'git',
    Component: SiGit,
    title: 'Git',
    Description: () => (
      <>Git is a tool that I use every day. I use GitHub for pushing my code.</>
    ),
  },
];
