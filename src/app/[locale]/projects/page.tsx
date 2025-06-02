'use client';

import { useTranslations } from "@/hooks/useTranslations";
import { Container, SimpleGrid } from '@chakra-ui/react';
import SectionTitle from '@/components/SectionTitle';
import ProjectCard from '@/components/ProjectCard';
import projects from '@/data/projects';

export default function ProjectsPage() {
  const t = useTranslations();

  return (
    <Container maxW="7xl" py={16}>
    <SectionTitle>{t.projects.allProjects}</SectionTitle>
      <SimpleGrid columns={[1, null, 2]} spacing={8}>
        {projects.map((proj) => (
          <ProjectCard
            key={proj.title}
            title={proj.title}
            description={proj.description}
            techStack={proj.techStack}
            demoUrl={proj.demoUrl}
            repoUrl={proj.repoUrl}
          />
        ))}
      </SimpleGrid>
    </Container>
  );
}