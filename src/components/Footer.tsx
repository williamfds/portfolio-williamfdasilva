'use client';

import { Box, Flex, Text, Link, Icon, HStack, useColorMode } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useTranslations } from "@/hooks/useTranslations";

export default function Footer() {
  const { colorMode } = useColorMode();
  const t = useTranslations();
  const year = new Date().getFullYear();

  return (
    <Box
      as="footer"
      bg={colorMode === 'light' ? 'gray.50' : 'gray.700'}
      py={8}
    >
      <Flex direction="column" align="center">
        <HStack spacing={4}>
          <Link href="https://github.com/williamfds" isExternal>
            <Icon as={FaGithub} boxSize={6} _hover={{ color: 'brand.400' }} />
          </Link>
          <Link href="https://linkedin.com/in/william-ferreira-da-silva/" isExternal>
            <Icon as={FaLinkedin} boxSize={6} _hover={{ color: 'brand.400' }} />
          </Link>
          <Link href="mailto:williamfdasilval@gmail.com" isExternal>
            <Icon as={FaEnvelope} boxSize={6} _hover={{ color: 'brand.400' }} />
          </Link>
        </HStack>
        <Text mt={4} fontSize="sm" color={colorMode === 'light' ? 'gray.500' : 'gray.400'}>
          {t.footer.rights.replace('{year}', String(year))}
        </Text>
      </Flex>
    </Box>
  );
}