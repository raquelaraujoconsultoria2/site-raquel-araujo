import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Aceita o link do YouTube como a pessoa copia (youtube.com/watch?v=, youtu.be/, shorts/, embed/)
// ou só o código do vídeo, e guarda apenas o código.
const idYouTube = (valor: string) => {
  const v = valor.trim();
  const achado = v.match(/(?:youtu\.be\/|[?&]v=|\/shorts\/|\/embed\/|\/live\/)([\w-]{11})/);
  return achado ? achado[1] : v;
};

const artigos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/artigos' }),
  schema: z
    .object({
      titulo: z.string(),
      resumo: z.string(),
      data: z.coerce.date(),
      categoria: z.enum(['Estratégia', 'Governança', 'Gestão', 'Liderança', 'Sucessão']),
      tipo: z.enum(['artigo', 'video']).default('artigo'),
      video: z
        .string()
        .optional()
        .transform((v) => (v ? idYouTube(v) || undefined : undefined)),
      rascunho: z.boolean().default(false),
    })
    .refine((d) => d.tipo !== 'video' || (d.video && /^[\w-]{11}$/.test(d.video)), {
      message: 'Conteúdo do tipo vídeo precisa de um link do YouTube válido.',
      path: ['video'],
    }),
});

export const collections = { artigos };
