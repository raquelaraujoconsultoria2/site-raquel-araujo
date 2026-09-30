import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const artigos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/artigos' }),
  schema: z.object({
    titulo: z.string(),
    resumo: z.string(),
    data: z.coerce.date(),
    categoria: z.enum(['Estratégia', 'Governança', 'Gestão', 'Liderança', 'Sucessão']),
    tipo: z.enum(['artigo', 'video']).default('artigo'),
    video: z.string().optional(), // ID do YouTube, quando tipo = video
    rascunho: z.boolean().default(false),
  }),
});

export const collections = { artigos };
