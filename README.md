# Site Raquel Araújo

Site estático em [Astro](https://astro.build), hospedado no Netlify.
Domínio: raquelaraujoconsultoria.com.br

## Comandos

```bash
npm install        # uma vez
npm run dev        # ambiente local em http://localhost:4321
npm run build      # gera o site em dist/
```

## Onde mexer

| O quê | Arquivo |
|---|---|
| WhatsApp, Cal.com, Google Analytics, e-mail, mostrar a seção de resultados | `src/config.ts` |
| Serviços, etapas do método, fases do crescimento, faixas de faturamento | `src/data.ts` |
| Perguntas do diagnóstico | `src/components/Diagnostico.astro` |
| Perguntas frequentes | `src/components/Perguntas.astro` |
| Logos de clientes e depoimentos | `src/components/Resultados.astro` |
| Novo artigo ou vídeo | criar um `.md` em `src/content/artigos/` (copie o existente) |
| Fotos | `src/assets/fotos/` (os originais ficam em `fotos-originais/`, fora do site) |
| Logo e favicon | `public/brand/` e `public/favicon.svg`; as variações estão em `/marca` |

## Formulários

Os formulários `contato` e `ebook` usam o Netlify Forms. Depois do primeiro deploy, é preciso configurar
no painel do Netlify, em **Forms → Form notifications**, a notificação por e-mail para a Raquel.

## Pendências

- [ ] Raquel escolher a variação do logo (página `/marca`)
- [ ] Raquel validar os nomes das etapas do método e as fases do crescimento (`src/data.ts`)
- [ ] Texto original do primeiro artigo (o texto atual é provisório)
- [ ] Raquel revisar a biografia e confirmar quais números da trajetória podem ser publicados
- [ ] Número de WhatsApp → `SITE.whatsapp`
- [ ] Conta no Cal.com → `SITE.cal`
- [ ] Criar a propriedade GA4 → `SITE.ga4`; cadastrar o site no Google Search Console
- [ ] Confirmar o e-mail de contato (Microsoft 365) → `SITE.email`
- [ ] Razão social/CNPJ na política de privacidade
- [ ] E-book (hoje o formulário funciona como lista de espera)
- [ ] Logos e depoimentos → ativar `SITE.mostrarResultados`
- [ ] Deploy no Netlify e DNS no Registro.br
