// Conteúdo reaproveitado entre a página inicial e as páginas internas.

export const SERVICOS = [
  {
    id: 'consultoria',
    titulo: 'Consultoria estratégica com acompanhamento',
    resumo:
      'Não termina no relatório. Do diagnóstico com dados até a rotina de gestão rodando, com acompanhamento até o resultado aparecer.',
    itens: ['Anamnese e diagnóstico com dados', 'Planejamento estratégico', 'Metas desdobradas por área', 'Rotina de gestão implantada'],
    publico: 'empresas',
    principal: true,
  },
  {
    id: 'conselho',
    titulo: 'Conselho consultivo',
    resumo:
      'Acompanhamento estratégico recorrente do dono e dos sócios. Uma cadeira de fora, com experiência de dentro, para as decisões que definem o futuro.',
    itens: ['Reuniões periódicas de conselho', 'Leitura de indicadores', 'Apoio nas grandes decisões'],
    publico: 'empresas',
  },
  {
    id: 'mentoria',
    titulo: 'Mentoria de líderes e sucessores',
    resumo:
      'Para quem assume mais responsabilidade do que o cargo antigo exigia: gestores, diretores, CEOs e sucessores que precisam liderar com consistência.',
    itens: ['Encontros individuais', 'Plano de desenvolvimento', 'Casos reais do seu dia a dia'],
    publico: 'lideres',
  },
  {
    id: 'governanca',
    titulo: 'Governança familiar e societária',
    resumo:
      'Papel claro para cada sócio, alinhamento de interesses, sucessão e preparação do próximo ciclo. É a governança que pensa na perenidade do negócio.',
    itens: ['Papéis e acordos entre sócios', 'Separação entre família, sócio e gestão', 'Planejamento da sucessão'],
    publico: 'empresas',
  },
];

// PENDENTE: Raquel validar os nomes das etapas.
export const METODO = [
  {
    nome: 'Anamnese',
    acontece: 'Conversa a fundo com o dono e os sócios sobre a história, o momento e as ambições da empresa.',
    leva: 'Uma leitura honesta do momento da empresa.',
  },
  {
    nome: 'Diagnóstico',
    acontece: 'Cruzamos a percepção do dono com os números. Sem dados, é chute.',
    leva: 'O mapa dos gargalos reais e das prioridades.',
  },
  {
    nome: 'Planejamento estratégico',
    acontece: 'Visão de 12, 24 e 36 meses: aonde a empresa quer chegar e o que ela escolhe não fazer.',
    leva: 'Um plano com poucas prioridades, claras e mensuráveis.',
  },
  {
    nome: 'Desdobramento',
    acontece: 'Cada prioridade vira meta por área, com responsável, prazo e plano de ação.',
    leva: 'Cada gestor sabe exatamente o que precisa entregar.',
  },
  {
    nome: 'Rotina de gestão',
    acontece: 'Rituais semanais e mensais, indicadores e correção de rota (PDCA), acompanhados até virar hábito.',
    leva: 'A empresa rodando com método, sem depender do dono.',
  },
];

// PENDENTE: Raquel validar as fases do crescimento.
export const FASES = [
  {
    nome: 'Fundação',
    empresa: 'O dono faz tudo. Vender, entregar e sobreviver.',
    socio: 'Executor. Está em todas as frentes, e isso é necessário.',
  },
  {
    nome: 'Tração',
    empresa: 'As vendas crescem mais rápido do que a estrutura. Os primeiros gestores chegam.',
    socio: 'Começa a delegar tarefas, mas ainda concentra as decisões.',
  },
  {
    nome: 'Estruturação',
    empresa: 'Processos, indicadores e áreas definidas. Aqui mora o gargalo do dono.',
    socio: 'Precisa sair da operação e passar a cobrar resultado, não tarefa.',
  },
  {
    nome: 'Profissionalização',
    empresa: 'Gestores decidem, metas são desdobradas e a rotina de gestão roda.',
    socio: 'Estrategista. Pensa no futuro, acompanha indicadores, forma líderes.',
  },
  {
    nome: 'Governança e sucessão',
    empresa: 'Conselho, papéis dos sócios claros e preparação do próximo ciclo.',
    socio: 'Conselheiro. Garante a perenidade e o valor da empresa.',
  },
];

export const FAIXAS_FATURAMENTO = [
  'Até R$ 4,8 milhões por ano',
  'De R$ 4,8 a R$ 20 milhões',
  'De R$ 20 a R$ 50 milhões',
  'De R$ 50 a R$ 100 milhões',
  'Acima de R$ 100 milhões',
];
