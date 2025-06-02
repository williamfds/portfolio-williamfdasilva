import { ColorModeScript } from '@chakra-ui/react';
import theme from '@/styles/theme';

export default function GlobalHead() {
  return <ColorModeScript initialColorMode={theme.config.initialColorMode} />;
}
