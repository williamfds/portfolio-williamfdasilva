'use client';

import { Box, Flex, Link, HStack, IconButton, useColorMode } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';
import { useTranslations } from '@/hooks/useTranslations';
import { useLocale } from '@/contexts/LocaleContext';
import { LocaleSwitcher } from './LocaleSwitcher';

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const locale = useLocale();
  const t = useTranslations();

  if (typeof window !== 'undefined' && !document.documentElement.hasAttribute('data-theme')) {
    return null;
  }

  const linkColor = colorMode === 'light' ? 'gray.700' : 'gray.100';

  return (
    <Box
      as="header"
      bg={colorMode === 'light' ? 'white' : 'gray.800'}
      boxShadow="sm"
      position="sticky"
      top="0"
      zIndex="overlay"
    >
      <Flex maxW="7xl" mx="auto" py={4} px={6} align="center" justify="space-between">
        <Link
          as={NextLink}
          href={`/${locale}`}
          fontSize="xl"
          fontWeight="bold"
          color="brand.500"
        >
          {t.header.siteName}
        </Link>

        <HStack spacing={{ base: 2, md: 6 }}>
          <Link as={NextLink} href={`/${locale}/about`} color={linkColor}>
            {t.nav.about}
          </Link>
          <Link as={NextLink} href={`/${locale}/projects`} color={linkColor}>
            {t.nav.projects}
          </Link>
          <Link as={NextLink} href={`/${locale}/opensource`} color={linkColor}>
            {t.nav.opensource}
          </Link>
          <Link as={NextLink} href={`/${locale}/contact`} color={linkColor}>
            {t.nav.contact}
          </Link>

          <LocaleSwitcher />

          <IconButton
            aria-label={t.header.toggleThemeAria}
            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
            size="sm"
          />
        </HStack>
      </Flex>
    </Box>
  );
}
