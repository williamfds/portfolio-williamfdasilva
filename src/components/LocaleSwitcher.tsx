'use client';

import { usePathname, useRouter } from 'next/navigation';
import { HStack, IconButton, Tooltip } from '@chakra-ui/react';
import Image from 'next/image';
import { useLocale } from '@/contexts/LocaleContext';
import { useTranslations } from '@/hooks/useTranslations';

export function LocaleSwitcher() {
  const locale = useLocale();
  const t = useTranslations();
  const pathname = usePathname();
  const router = useRouter();

  const rest = pathname.replace(`/${locale}`, '');

  const handleSwitch = (targetLocale: 'pt' | 'en') => {
    router.push(`/${targetLocale}${rest}`);
  };

  return (
    <HStack spacing={2}>
      <Tooltip label={t.localeSwitcher.ptTooltip} hasArrow>
        <IconButton
          aria-label={t.localeSwitcher.ptAria} 
          icon={
            <Image src="/flags/br.png" alt="Português" width={24} height={16}  style={{ width: 'auto', height: 'auto' }} />
          }
          variant="ghost"
          onClick={() => handleSwitch('pt')}
          isDisabled={locale === 'pt'}
        />
      </Tooltip>

      <Tooltip label={t.localeSwitcher.enTooltip} hasArrow>
        <IconButton
          aria-label={t.localeSwitcher.enAria}
          icon={
            <Image src="/flags/us.png" alt="English" width={24} height={16}  style={{ width: 'auto', height: 'auto' }} />
          }
          variant="ghost"
          onClick={() => handleSwitch('en')}
          isDisabled={locale === 'en'}
        />
      </Tooltip>
    </HStack>
  );
}