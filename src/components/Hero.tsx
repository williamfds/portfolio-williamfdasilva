'use client';

import { Box, Heading, Text, Button, Stack, useColorModeValue } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useTranslations } from '@/hooks/useTranslations';

export default function Hero() {
  const bg = useColorModeValue('gray.100', 'gray.800');
  const color = useColorModeValue('black', 'white');
  const t = useTranslations();

  return (
    <Box w="full" bg={bg} py={20} px={6}>
      <Stack spacing={6} maxW="3xl" mx="auto" textAlign="center">
        <Heading as="h1" size="2xl" color="brand.500">
          {t.hero.title}
        </Heading>
        <Text fontSize="xl" color={color}>
          {t.hero.description}
        </Text>
        <NextLink href="/projects" passHref>
          <Button colorScheme="brand" size="lg" alignSelf="center">
            {t.hero.buttonProjects}
          </Button>
        </NextLink>
      </Stack>
    </Box>
  );
}
