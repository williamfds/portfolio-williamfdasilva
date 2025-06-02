'use client';

import { useTranslations } from '@/hooks/useTranslations';
import { Box, Heading, Text, Container } from '@chakra-ui/react';

export default function AboutPage() {
  const t = useTranslations();

  return (
    <Container maxW="3xl" py={16}>
      <Heading as="h1" size="2xl" mb={6} color="brand.500">
        {t.about.title}
      </Heading>
      <Box fontSize="lg" lineHeight="tall">
        <Text mb={4}>{t.about.paragraph1}</Text>
        <Text mb={4}>{t.about.paragraph2}</Text>
        <Text>{t.about.paragraph3}</Text>
      </Box>
    </Container>
  );
}
