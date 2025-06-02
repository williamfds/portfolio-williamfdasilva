'use client';

import { Heading } from '@chakra-ui/react';

interface SectionTitleProps {
  children: React.ReactNode;
}

export default function SectionTitle({ children }: SectionTitleProps) {
  return (
    <Heading as="h2" size="xl" my={8} color="brand.500">
      {children}
    </Heading>
  );
}
