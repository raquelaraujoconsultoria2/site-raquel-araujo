// Configurações centrais do site. Campos vazios escondem o recurso correspondente.
export const SITE = {
  nome: 'Raquel Araújo',
  assinatura: 'Estratégia · Governança · Negócios',
  url: 'https://raquelaraujoconsultoria.com.br',
  descricao:
    'Consultoria de empresário para empresário. Estratégia, governança e rotina de gestão para pequenas e médias empresas crescerem sem depender do dono para tudo.',

  // Apelido da caixa raquel@ no Microsoft 365
  email: 'contato@raquelaraujoconsultoria.com.br',

  // PENDENTE: número com DDI, só dígitos (ex.: '5519999999999'). Vazio = botão oculto.
  whatsapp: '',
  whatsappMensagem: 'Olá, Raquel! Vim pelo site e gostaria de conversar sobre a minha empresa.',

  // Link do Cal.com no formato 'usuario/evento'. Vazio = mostra só o formulário.
  // Se o nome de usuário dela mudar no Cal.com, atualizar aqui.
  cal: 'raquel-araujo-feh1oh/conversa-inicial',

  // PENDENTE: ID do Google Analytics 4 (G-XXXXXXX). Só carrega após o aceite de cookies.
  ga4: '',

  // Seção "Empresas e resultados": fica oculta até existirem logos e depoimentos.
  mostrarResultados: false,
};

export const MENU = [
  { href: '/', label: 'Início' },
  { href: '/para-empresas', label: 'Para empresas' },
  { href: '/para-lideres', label: 'Para líderes' },
  { href: '/conteudos', label: 'Conteúdos' },
  { href: '/biografia', label: 'Biografia' },
];

export const whatsappUrl = (msg = SITE.whatsappMensagem) =>
  SITE.whatsapp ? `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}` : '';
