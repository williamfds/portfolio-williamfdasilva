export interface Project {
  title: string;
  description: string;
  techStack: string[];
  demoUrl?: string;
  repoUrl?: string;
}

const projects: Project[] = [
  {
    title: 'Meuportfólio-v2',
    description: 'Site pessoal em Next.js 15, Tailwind e Chakra UI.',
    techStack: ['Next.js', 'Tailwind CSS', 'Chakra UI', 'TypeScript'],
    demoUrl: 'https://xxxxxxxx.app',
    repoUrl: 'https://github.com/williamfds/portfolio-williamfdasilva'
  },
  {
    title: 'API de Tasks',
    description: 'API RESTful em NestJS com MongoDB e autenticação JWT.',
    techStack: ['NestJS', 'TypeScript', 'MongoDB', 'JWT'],
    repoUrl: 'https://github.com/williamfds/tasks-api'
  },
];

export default projects;
