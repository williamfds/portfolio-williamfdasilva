import {
  Box,
  Heading,
  Text,
  Link,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
  import { useTranslations } from "@/hooks/useTranslations";

interface OSSContributionCardProps {
  projectName: string;
  description: string;
  prUrl: string;
}

export default function OSSContributionCard({
  projectName,
  description,
  prUrl,
}: OSSContributionCardProps) {
  const bg = useColorModeValue('white', 'gray.700');
  const borderColor = useColorModeValue('gray.200', 'gray.600');
  const t = useTranslations();

  return (
    <Box
      bg={bg}
      border="1px"
      borderColor={borderColor}
      borderRadius="md"
      p={6}
      shadow="md"
      w="full"
    >
      <Heading as="h3" size="lg" mb={4}>
        {projectName}
      </Heading>
      <Text mb={4}>{description}</Text>
      <Stack direction="row">
         <Link href={prUrl} isExternal>
           <Text color="brand.500" fontWeight="bold">
             {t.opensource.viewPR}
           </Text>
         </Link>
      </Stack>
    </Box>
  );
}
