'use client';

import { useTranslations } from "@/hooks/useTranslations";
import { Container } from '@chakra-ui/react';
import SectionTitle from '@/components/SectionTitle';
import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  const t = useTranslations();

  return (
    <Container maxW="3xl" py={16}>
      <SectionTitle>{t.contact.title}</SectionTitle>
      <ContactForm />
    </Container>
  );
}
