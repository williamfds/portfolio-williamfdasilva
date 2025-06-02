'use client';

import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Stack,
  useToast,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useTranslations } from "@/hooks/useTranslations";

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const toast = useToast();
  const t = useTranslations();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setName('');
    setEmail('');
    setMessage('');
    toast({
      title: 'Mensagem enviada!',
      description: 'Obrigado pelo contato. Retornarei em breve.',
      status: 'success',
      duration: 5000,
      isClosable: true,
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={4} maxW="lg" mx="auto">
         <FormControl isRequired>
           <FormLabel>{t.contact.name}</FormLabel>
           <Input
             placeholder={t.contact.name}
             value={name}
             onChange={(e) => setName(e.target.value)}
           />
         </FormControl>

         <FormControl isRequired>
           <FormLabel>{t.contact.email}</FormLabel>
           <Input
             type="email"
             placeholder={t.contact.email}
             value={email}
             onChange={(e) => setEmail(e.target.value)}
           />
         </FormControl>

         <FormControl isRequired>
           <FormLabel>{t.contact.message}</FormLabel>
           <Textarea
             placeholder={t.contact.message}
             value={message}
             onChange={(e) => setMessage(e.target.value)}
           />
         </FormControl>

         <Button type="submit" colorScheme="brand" alignSelf="flex-end">
           {t.contact.submit}
         </Button>
      </Stack>
    </form>
  );
}
