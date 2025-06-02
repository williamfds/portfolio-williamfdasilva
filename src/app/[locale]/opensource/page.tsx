'use client';

import { useTranslations } from "@/hooks/useTranslations";
import { Container, SimpleGrid, Box } from '@chakra-ui/react';
import SectionTitle from '@/components/SectionTitle';
import OSSContributionCard from '@/components/OSSContributionCard';
import contributions from '@/data/contributions';

export default function OSSPage() {
  const t = useTranslations();

  return (
    <Box bg="gray.50" _dark={{ bg: 'gray.800' }} py={16}>
      <Container maxW="7xl">
        <SectionTitle>{t.opensource.title}</SectionTitle>
        <SimpleGrid columns={[1, null, 2]} spacing={8}>
          {contributions.map((c) => (
            <OSSContributionCard
              key={c.projectName}
              projectName={c.projectName}
              description={c.description}
              prUrl={c.prUrl}
            />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
