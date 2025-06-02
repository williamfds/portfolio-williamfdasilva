'use client';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '@/styles/theme';
import type { ReactNode } from 'react';

export default function Providers({ children }: { children: ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
