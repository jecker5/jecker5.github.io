import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from '../assets';
import csci from '../assets/icons/csci.png';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];
import coursify from '../assets/projects/coursify.jpeg';
import fairly from '../assets/projects/Fairly-logos-modified.jpeg';
import calculator from '../assets/projects/climatechange.jpeg';
import python from '../assets/tech/pythonlogo.png';
import java from '../assets/tech/javalogo.png';

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Cyber Security',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'Python',
    icon: python,
  },
  {
    name: 'Java',
    icon: java,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Software Engineer Intern',
    company_name: 'NIWC Atlantic',
    icon: csci,
    iconBg: '#333333',
    date: 'July 2023 - Current',
  },
  {
    title: 'Computer Science Undergraduate',
    company_name: 'College of Charleston',
    icon: csci,
    iconBg: '#333333',
    date: 'August 2021 - May 2023',
  },
  {
    title: 'Cyber Security Undergraduate',
    company_name: 'Horry Georgetown Technical College',
    icon: csci,
    iconBg: '#333333',
    date: 'August 2019 - May 2021',
  },
  
];

const projects = [
  {
    id: 'project-1',
    name: 'Coursify',
    description: 'JavaScript web-app functioning as a student advice catalog for CofC Computer Science Studnets.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: coursify,
  },
  {
    id: 'project-2',
    name: 'Fairly',
    description:
      'A mobile device restaurant review app allowing customers to see how a restaurant treats its employees.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: fairly,
  },
  {
    id: 'project-3',
    name: 'Co2 Calculator',
    description: 'Mobile app calculating the amount of Co2 emitted by your car per drive.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: calculator,
  },
];

export { services, technologies, experiences, projects };
