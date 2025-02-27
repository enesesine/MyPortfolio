// src/app/projects/projects.data.ts
import { Project } from './interfaces/project.model';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Sharkie',
    description:
      'A thrilling video game adventure that challenges your reflexes.',
    implementationDetails:
      'Built with plain JavaScript and a custom game engine...',
    duration: '6 months',
    used_tech: ['HTML', 'CSS', 'JavaScript'],
    image: '/assets/Images/MyProjects/Thumbnails/SharkieThumbnail.png',
    animatedLineImage: '/assets/Images/AboutMe/AboutMeLine.png',
    techIcons: [
      '/assets/Images/SkillSet/Logos/Frontend/HTML.png',
      '/assets/Images/SkillSet/Logos/Frontend/CSS.png',
      '/assets/Images/SkillSet/Logos/Frontend/JS.png',
    ],
    repoLink: 'https://github.com/enesesine/sharkie', // <– Falls existiert
    liveDemo: 'https://en.es/Sharkie', // <– Falls existiert
  },
  {
    id: 2,
    title: 'Join',
    description:
      'A powerful task management tool that streamlines collaboration.',
    implementationDetails:
      'In a team of 4, I was responsible for the registration/login...',
    duration: '3 months',
    used_tech: ['HTML', 'CSS', 'JavaScript'],
    image: '/assets/Images/MyProjects/Thumbnails/JoinThumbnail.png',
    animatedLineImage: '/assets/Images/AboutMe/AboutMeLine.png',
    techIcons: [
      '/assets/Images/SkillSet/Logos/Frontend/HTML.png',
      '/assets/Images/SkillSet/Logos/Frontend/CSS.png',
      '/assets/Images/SkillSet/Logos/Frontend/JS.png',
    ],
    repoLink: 'https://github.com/enesesine/join',
    liveDemo: '#',
  },
  // ...
  // Und so weiter...
];
