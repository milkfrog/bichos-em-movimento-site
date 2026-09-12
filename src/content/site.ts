import heroPhoto from '@/assets/images/hero-fisioterapia.jpg';
import foundersPhoto from '@/assets/images/equipe-fundadoras.jpg';
import missionPhoto from '@/assets/images/missao-yorkshire.jpg';
import laserPhoto from '@/assets/images/laserterapia.jpg';
import catPhoto from '@/assets/images/atendimento-gato.jpg';
import platformsPhoto from '@/assets/images/equipe-plataformas.jpg';
import logo from '@/assets/images/logo.png';

// types

export type SectionId =
  | 'inicio'
  | 'historia'
  | 'missao'
  | 'abordagem'
  | 'valores'
  | 'equipe'
  | 'servicos'
  | 'duvidas'
  | 'contato';

export interface NavItem {
  readonly id: SectionId;
  readonly label: string;
}

export interface Photo {
  readonly src: string;
  readonly alt: string;
}

export interface TeamMember {
  readonly id: string;
  readonly name: string;
  readonly crmv: string;
  readonly role: string;
  readonly bio: readonly string[];
  readonly photo?: Photo;
}

export interface ServiceStage {
  readonly step: string;
  readonly title: string;
  readonly body: string;
}

export interface FaqItem {
  readonly id: string;
  readonly question: string;
  readonly answer: readonly string[];
}

export interface ContactChannel {
  readonly id: string;
  readonly label: string;
  readonly entries: readonly { readonly text: string; readonly href: string }[];
}

// brand

export const brand = {
  name: 'Bichos em Movimento',
  tagline: 'Reabilitação veterinária',
  logo: {
    src: logo,
    alt: 'Bichos em Movimento — silhuetas de um cão e um gato dentro de um círculo',
  },
} as const;

// navigation

export const navItems: readonly NavItem[] = [
  { id: 'inicio', label: 'Home' },
  { id: 'historia', label: 'Nossa história' },
  { id: 'missao', label: 'Missão' },
  { id: 'equipe', label: 'Nossa equipe' },
  { id: 'servicos', label: 'Serviços' },
  { id: 'duvidas', label: 'Dúvidas' },
  { id: 'contato', label: 'Contato' },
] as const;

// hero

export const hero = {
  title: brand.name,
  subtitle: brand.tagline,
  photo: {
    src: heroPhoto,
    alt: 'Duas médicas veterinárias conduzindo um cão por entre cones em uma sessão de fisioterapia',
  },
} as const;

// nossa história

export const history = {
  heading: 'Nossa história',
  body: 'A Bichos em Movimento nasceu do sonho de três amigas apaixonadas por animais e pela fisiatria veterinária. Unidas pelo desejo de fazer a diferença, elas se dedicaram a criar uma empresa onde cada paciente recebe cuidado individualizado, com carinho, técnica e respeito.',
  photo: {
    src: foundersPhoto,
    alt: 'As três sócias fundadoras da Bichos em Movimento sentadas juntas, sorrindo',
  },
} as const;

// missão

export const mission = {
  heading: 'Missão',
  body: 'Na Bichos em Movimento acreditamos que cada paciente é único e merece um atendimento personalizado e de alta qualidade. Nossa prioridade é o bem-estar animal, proporcionando tratamentos que aliviam dores, restauram movimentos e promovem uma vida mais saudável e ativa.',
  photo: {
    src: missionPhoto,
    alt: 'Cão de pequeno porte em pé sobre uma plataforma de equilíbrio, acompanhado por duas veterinárias',
  },
} as const;

// abordagem

export const approach = {
  heading: 'Nossa abordagem',
  caption:
    'Atuamos com cuidado e empatia, respeitando as necessidades individuais de cada pet e de seus tutores, porque sabemos que a reabilitação vai além do tratamento físico – é um processo de carinho, paciência e dedicação.',
  gallery: [
    {
      src: laserPhoto,
      alt: 'Veterinária aplicando laserterapia em um cão deitado em uma cama macia',
    },
    {
      src: catPhoto,
      alt: 'Veterinária oferecendo um petisco a um gato laranja sobre uma plataforma de equilíbrio',
    },
    {
      src: platformsPhoto,
      alt: 'As três veterinárias acompanhando um cão em exercícios sobre plataformas proprioceptivas',
    },
  ],
} as const satisfies { heading: string; caption: string; gallery: readonly Photo[] };

// valores

export const values = {
  heading: 'Nossos valores',
  body: 'Nosso trabalho é guiado pelo compromisso e ética, utilizando práticas baseadas em evidências e sempre buscando a melhor abordagem para cada caso. Além disso, valorizamos a conexão entre tutores e seus animais, ajudando a fortalecer esse vínculo e proporcionando conhecimento para que possam identificar e atender às necessidades dos seus companheiros.',
} as const;

// equipe

export const team: { heading: string; members: readonly TeamMember[] } = {
  heading: 'Nossa equipe',
  members: [
    {
      id: 'leticia-orthey-cidral',
      name: 'M.V. Letícia Orthey Cidral',
      crmv: 'CRMV PR 22557',
      role: 'Sócia proprietária da Bichos em Movimento.',
      bio: [
        'Formada pela Universidade Federal do Paraná e, atualmente, mestranda em fisiatria veterinária na mesma instituição.',
        'Possui pós-graduação em fisiatria, reabilitação e fisioterapia e em acupuntura veterinária. E diversos cursos em ozonioterapia, aromaterapia e florais de Bach e Saint German, além de cursos de atualização.',
        'Profissional atuante na área de fisiatria veterinária à 5 anos e na acupuntura à 3 anos.',
      ],
    },
    {
      id: 'gabriella-barcelos',
      name: 'M.V. Gabriella Barcelos',
      crmv: 'CRMV PR 20992',
      role: 'Sócia proprietária da Bichos em Movimento.',
      bio: [
        'Formada pela Universidade Positivo, mestranda em fisiatria veterinária, pela Universidade Federal do Paraná.',
        'Diversos cursos, aprimoramentos e congressos nas áreas de ortopedia, neurologia clínica, biomecânica, terapia manual e controle da dor.',
        'Profissional atuante na área de fisiatria veterinária à 3 anos.',
      ],
    },
    {
      id: 'roberta-de-farias',
      name: 'M.V. Roberta de Farias',
      crmv: 'CRMV PR 26640',
      role: 'Sócia proprietária da Bichos em Movimento.',
      bio: [
        'Formada em Engenharia de Materiais pela Universidade Federal de Santa Catarina.',
        'Formada em Medicina Veterinária pela Universidade Federal do Paraná.',
        'Pós-graduanda em Fisioterapia e Reabilitação Veterinária pela Universidade Positivo.',
      ],
    },
  ],
};

// serviços

export const services = {
  eyebrow: 'Serviço',
  heading: 'Consultas de Fisioterapia Veterinária e Acupuntura Veterinária',
  stages: [
    {
      step: 'Etapa 1',
      title: 'Avaliação',
      body: 'Antes de tudo, é preciso investigar as causas e sintomas do problema do seu pet. Nossas profissionais irão avaliar se o animal tem alguma lesão e se existem dores compensatórias. Essa é a fase principal para que o tratamento dê certo!',
    },
    {
      step: 'Etapa 2',
      title: 'Diagnóstico',
      body: 'Identificadas as causas e os sintomas, chegamos ao diagnóstico. A partir daqui será possível entender como poderemos ajudar o seu pet, assim conseguimos definir o melhor tratamento a seguir.',
    },
    {
      step: 'Etapa 3',
      title: 'Tratamento',
      body: 'Definida a melhor abordagem para o seu pet, iniciamos o tratamento, ou seja, os cuidados necessários para diminuir a dor do seu pet e, ao mesmo tempo, aumentar a sua qualidade de vida.',
    },
  ],
  closing:
    'Na Bichos em Movimento, cada passo na reabilitação é dado com responsabilidade, amor e o compromisso de proporcionar mais qualidade de vida aos nossos pacientes.',
} as const satisfies {
  eyebrow: string;
  heading: string;
  stages: readonly ServiceStage[];
  closing: string;
};

// dúvidas

export const faq = {
  heading: 'Dúvidas frequentes',
  items: [
    {
      id: 'primeira-consulta',
      question: 'Como funciona a 1ª consulta?',
      answer: [
        'Na 1ª consulta há uma avaliação detalhada do paciente com o objetivo de identificar a doença, avaliar a presença de dores locais e compensatórias e comprometimentos osteoarticulares e musculoesqueléticas.',
      ],
    },
    {
      id: 'sessoes',
      question: 'Como funcionam as sessões?',
      answer: [
        'As sessões de tratamento tem como finalidade dar continuidade ao tratamento proposto na avaliação inicial. Independente da doença, seu animal será avaliado de forma individualizada.',
        'Cada sessão dura de 40 a 60 minutos.',
      ],
    },
    {
      id: 'tecnicas',
      question: 'Quais técnicas/aparelhos serão usados?',
      answer: [
        'A escolha do aparelho e técnicas dependerá de como o paciente está se sentindo no dia da sessão.',
        'Sempre serão feitas avaliações do paciente e o tratamento é ajustado conforme a necessidade. Nossa prioridade é sempre o bem-estar!',
      ],
    },
  ],
} as const satisfies { heading: string; items: readonly FaqItem[] };

// contato

export const contact = {
  heading: 'Contato',
  channels: [
    {
      id: 'email',
      label: 'E-mail',
      entries: [
        {
          text: 'contato@bichosemmovimento.com.br',
          href: 'mailto:contato@bichosemmovimento.com.br',
        },
      ],
    },
    {
      id: 'whatsapp',
      label: 'WhatsApp',
      entries: [
        { text: 'Curitiba: (41) 99244-5098', href: 'https://wa.me/5541992445098' },
        { text: 'Foz do Iguaçu: (45) 99153-5720', href: 'https://wa.me/5545991535720' },
      ],
    },
    {
      id: 'instagram',
      label: 'Instagram',
      entries: [
        {
          text: '@bichos.em.movimento',
          href: 'https://www.instagram.com/bichos.em.movimento/',
        },
      ],
    },
  ],
} as const satisfies { heading: string; channels: readonly ContactChannel[] };
