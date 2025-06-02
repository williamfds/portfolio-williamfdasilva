export interface OSSContribution {
  projectName: string;
  description: string;
  prUrl: string;
}

const contributions: OSSContribution[] = [
  {
    projectName: 'fastify-jwt',
    description: 'Adiciona suporte a configurar adequadamente a validade de tokens JWT e melhor tratamento de erros.',
    prUrl: 'https://github.com/fastify/fastify-jwt/pull/377'
  },
  {
    projectName: 'fastify-compress',
    description: 'Corrige problema de compressão para casos de resposta sem corpo (empty response) e ajuste de headers.',
    prUrl: 'https://github.com/fastify/fastify-compress/pull/359'
  },
  {
    projectName: 'fastify-compress',
    description: 'Aprimora teste de compressão para respostas multipart e corrige regressão no pipeline de streams.',
    prUrl: 'https://github.com/fastify/fastify-compress/pull/360'
  },
  {
    projectName: 'fastify-session',
    description: 'Melhora validação de sessão em cenários de múltiplos cookies e adiciona teste para cálculo de hash.',
    prUrl: 'https://github.com/fastify/session/pull/304'
  },
  {
    projectName: 'fastify-busboy',
    description: 'Corrige vazamento de streams em upload de vários arquivos e melhora manuseio de limites de payload.',
    prUrl: 'https://github.com/fastify/busboy/pull/191'
  },
];

export default contributions;
