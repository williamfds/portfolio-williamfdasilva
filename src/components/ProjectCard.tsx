'use client';

import {
  Box,
  Heading,
  Text,
  Link,
  Button,
  Badge,
  Stack,
  useColorModeValue
} from '@chakra-ui/react';
  import { useTranslations } from "@/hooks/useTranslations";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  demoUrl?: string;
  repoUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  techStack,
  demoUrl,
  repoUrl,
}: ProjectCardProps) {
  const bg = useColorModeValue('white', 'gray.700');
  const borderColor = useColorModeValue('gray.200', 'gray.600');
  const t = useTranslations();

  return (
    <Box
      bg={bg}
      border="1px"
      borderColor={borderColor}
      borderRadius="md"
      p={6}
      shadow="md"
      w="full"
    >
      <Heading as="h3" size="lg" mb={4}>
        {title}
      </Heading>
      <Text mb={4}>{description}</Text>
      <Stack direction="row" spacing={2} mb={4} wrap="wrap">
        {techStack.map((tech) => (
          <Badge key={tech} colorScheme="brand">
            {tech}
          </Badge>
        ))}
      </Stack>
      <Stack direction="row" spacing={4}>

         {demoUrl && (
           <Link href={demoUrl} isExternal>
             <Button size="sm" colorScheme="brand">
               {t.projects.demo}
             </Button>
           </Link>
         )}
         {repoUrl && (
           <Link href={repoUrl} isExternal>
             <Button size="sm" variant="outline" colorScheme="brand">
             {t.projects.repo}
             </Button>
           </Link>
         )}
      </Stack>
    </Box>
  );
}
