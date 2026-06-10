import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  IconExternalLink,
  IconBrandGithub,
  IconChevronLeft,
  IconChevronRight,
} from '@tabler/icons-react';

import PlasmaWave from '../PlasmaWave';
import { useIsMobile } from '@/hooks/useIsMobile';

type Project = {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github?: string;
  link?: string | null;
};

type Category = 'web' | 'academico' | 'cursos';

const PROJECTS: Record<Category, Project[]> = {
  web: [
    {
      title: 'CCBlog',
      description:'O CCBlog é uma plataforma web desenvolvida para centralizar informações, notícias e gestão acadêmica do curso de Ciência da Computação',
      technologies: ['React/TypeScript', 'Tailwind', 'Node/Express', 'Docker'],
      image: '/projetos/ccblog.webp',
      github: 'https://github.com/debs-veras/ccblog',
      link: 'https://ccblog-zeta.vercel.app/',
    },
    {
      title: 'Sinal Verde',
      description: 'Site imobiliário moderno desenvolvido para a Sinal Verde Negócios Imobiliários. Design responsivo, animações com Framer Motion e catálogo de imóveis dinâmico.',
      technologies: ['React/TypeScript', 'Tailwind'],
      image: '/projetos/sinal-verde.webp',
      link: 'https://sinal-verde-site.vercel.app/',
    },
    {
      title: 'AltusBranding ',
      description: 'Landing page institucional para AltusBranding, focada em branding estratégico, design e experiência digital.',
      technologies: ['React', 'Typescript', 'Tailwind'],
      image: '/projetos/altusbranding.webp',
      github: 'https://github.com/debs-veras/altusbranding',
      link: 'https://altusbranding.vercel.app',
    },
    {
      title: 'BoxChat',
      description: 'Este projeto é um sistema de chat em tempo real que permite conversas entre usuários conectados. Foi desenvolvido usando React para o frontend e Socket.IO com Node.js para o backend.',
      technologies: ['TypeScript', 'React', 'Tailwind'],
      image: '/projetos/box-chat.webp',
      github: 'https://github.com/debs-veras/box_chat',
    },
    {
      title: 'Explorer NASA',
      description: 'Explorer NASA é uma aplicação frontend desenvolvida em React + TypeScript que consome a NASA Open API (APOD – Astronomy Picture of the Day) para exibir uma galeria de imagens e vídeos astronômicos.',
      technologies: ['TypeScript', 'React', 'Tailwind'],
      image: '/projetos/explorer-nasa.webp',
      github: 'https://github.com/debs-veras/explorer-nasa',
      link: 'https://explorer-nasa.vercel.app',
    },
    {
      title: 'MovieExplore',
      description: 'MovieExplore é um front-end em React + TypeScript + Vite para pesquisar filmes e séries usando a API do TMDB. O projeto oferece busca, página de detalhes, autenticação e gerenciamento de favoritos (Minha Coleção).',
      technologies: ['React/TypeScript', 'Tailwind'],
      image: '/projetos/movie-explore.webp',
      github: 'https://github.com/debs-veras/search-movie',
      link: 'https://search-movie-explore.vercel.app/',
    },
    {
      title: 'Git Humilha',
      description: 'Git Humilha é uma aplicação React que analisa perfis públicos do GitHub e gera um roast técnico sobre os repositórios, linguagens, estrelas, forks, projetos arquivados e sinais de atividade.',
      technologies: ['React/TypeScript', 'Tailwind', ],
      image: '/projetos/githumilha.webp',
      github: 'https://github.com/debs-veras/git-humilha',
      link: 'https://git-humilha.vercel.app/',
    },
    {
      title: 'Seleção Coded',
      description: 'O Coded é uma plataforma robusta de gestão acadêmica projetada para simplificar a organização de atividades escolares.',
      technologies: ['React/TypeScript', 'Tailwind', 'Python', 'Docker'],
      image: '/projetos/coded.webp',
      github: 'https://github.com/debs-veras/coded',
    },
    {
      title: 'Quiz Naruto',
      description: 'Um quiz interativo com a temática do anime Naruto. Este projeto foi desenvolvido para testar os conhecimentos dos fãs do universo ninja, apresentando perguntas dinâmicas e gerenciamento de estado avançado.',
      technologies: ['React/TypeScript', 'Tailwind'],
      image: '/projetos/quiz-naruto.webp',
      github: 'https://github.com/debs-veras/quiz-naruto-fe',
      link: 'https://quiz-naruto-fe.vercel.app',
    },
    {
      title: 'Portfólio ',
      description: 'Este projeto consiste em uma landing page de página única (SPA) com navegação por âncoras, construída para servir como portfólio pessoal e também como base reutilizável para páginas institucionais.',
      technologies: ['React', 'Typescript', 'Tailwind'],
      image: '/projetos/portfolio.webp',
      github: 'https://github.com/debs-veras/landing-page',
    },
    {
      title: 'Pokedex com Api',
      description: 'Um componente interativo em React que exibe detalhes completos de um Pokémon em um modal animado, consumindo dados em tempo real da PokéAPI. Uma Pokédex interativa desenvolvida para fins de aprendizado',
      technologies: ['React', 'Typescript', 'Tailwind'],
      image: '/projetos/pokedex.webp',
      link: 'https://pokedex-orpin-chi-52.vercel.app/',
      github: 'https://github.com/debs-veras/pokedex',
    },
    {
      title: 'Seleção Box3',
      description: 'Este projeto foi desenvolvido como parte do processo seletivo técnico de uma empresa, com o objetivo de demonstrar habilidades em desenvolvimento frontend, organização de código, regras de negócio, integração com API e experiência do usuário.',
      technologies: ['React/JavaScript', 'Tailwind'],
      image: '/projetos/selecao-box3.webp',
      github: 'https://github.com/debs-veras/react-selecao-box3',
      link: 'https://react-selecao-box3.vercel.app/',
    },
    {
      title: 'Memory Game',
      description: 'Jogo da Memória desenvolvido com HTML, CSS e JavaScript. O projeto começou a partir de um estudo de um jogo base apresentado em um vídeo do YouTube, mas foi fortemente expandido e refatorado, recebendo novas funcionalidades e modos de jogo adicionais.',
      technologies: ['JavaScript', 'CSS', 'HTML'],
      image: '/projetos/memory-game.webp',
      github: 'https://github.com/debs-veras/memory-game',
      link: 'https://memory-game-debs.vercel.app',
    },
    {
      title: 'Clone Netflix',
      description: 'Uma réplica visual da página de entrada (landing page) da Netflix, focada em design responsivo, performance e experiência do usuário premium.',
      technologies: ['JavaScript', 'CSS', 'HTML'],
      image: '/projetos/clone-netflix.webp',
      github: 'https://github.com/debs-veras/clone-netflix',
      link: 'https://clone-netflix-debs.vercel.app',
    },
    {
      title: 'AltusAerial',
      description: 'Site institucional desenvolvido para a AltusAerial, focado na apresentação de serviços, identidade visual moderna e navegação responsiva.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: '/projetos/altus-aerial.webp',
      link: 'https://altusaerial.com.br/',
    },
    {
      title: 'When & Weather',
      description: 'Aplicação web desenvolvida durante o NASA International Space Apps Challenge 2025. O projeto auxilia no planejamento de eventos mais seguros ao permitir a consulta de condições climáticas',
      technologies: ['React', 'TypeScript', 'CSS'],
      image: '/projetos/when-and-weather.webp',
      github: 'https://github.com/CodeStormNinja/when-and-weather',
    },
    {
      title: 'Site Educação Popular',
      description: 'Este é um projeto digital que visa promover, divulgar e fortalecer práticas de Educação Popular em Saúde, alinhadas à participação social e às políticas públicas de base comunitária.',
      technologies: ['PHP', 'Bootstrap', 'CSS', 'HTML'],
      image: '/projetos/educacao-popular.webp',
      github: 'https://github.com/debs-veras/site-educacao-popular',
    },
    {
      title: 'Jogo Pedra, Papel e Tesoura',
      description: 'Este é um projeto simples de um jogo Pedra, Papel e Tesoura desenvolvido com HTML, CSS e JavaScript.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: '/projetos/pedra-papel-tesoura.webp',
      link: 'https://jogo-pedra-papel-tesoura-debs.vercel.app',
      github: 'https://github.com/debs-veras/jogo-pedra-papel-tesoura',
    },
  ],
  academico: [
    {
      title: 'Estrutura de Dados',
      description:
        'Atividades e implementações realizada na disciplina de estrutura de dados',
      technologies: [],
      image:
        'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=80',
      link: null,
      github: 'https://github.com/debs-veras/estrutura-de-dados',
    },
    {
      title: 'Programação Orientada a Objetos',
      description:
        'Atividades e implementações realizada na disciplina de programação orientada a objetos (POO)',
      technologies: [],
      image:
        'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80',
      link: null,
      github: 'https://github.com/debs-veras/programacao-orientada-objeto',
    },
    {
      title: 'Construção e Análise de Algoritmos',
      description:
        'Atividades e implementações realizada na disciplina de construção e análise de algoritmos',
      technologies: [],
      image:
        'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1200&q=80',
      link: null,
      github: 'https://github.com/debs-veras/construcao-analise-algoritmos',
    },
    {
      title: 'Algoritmos para Grafos',
      description:
        'Atividades e implementações realizada na disciplina de algoritmo para grafos',
      technologies: [],
      image:
        'https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=1200&q=80',
      link: null,
      github: 'https://github.com/debs-veras/algoritmos-para-grafos',
    },
    {
      title: 'Redes de Computadores',
      description:
        'Atividades e implementações realizada na disciplina de redes de computadores',
      technologies: [],
      image:
        'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80',
      link: null,
      github: 'https://github.com/debs-veras/socket',
    },
    {
      title: 'Compiladores',
      description:
        'Implementação de um compilador para uma linguagem simplificada, utilizando Flex para análise léxica e Bison para análise sintática, com foco em geração de código intermediário (ILOC).',
      technologies: ['C', 'Flex', 'Bison'],
      image:
        'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=1200&q=80',
      link: null,
      github: 'https://github.com/debs-veras/compiladores',
    },
    {
      title: 'Laboratório de Programação',
      description:
        'Desenvolvimento de algoritmos estruturados e lógica de programação em C. O projeto reúne diversos exercícios práticos, incluindo a implementação de jogos e manipulação de estruturas de dados básicas.',
      technologies: ['C'],
      image:
        'https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=1200&q=80',
      link: null,
      github: 'https://github.com/debs-veras/laboratorio-de-programacao',
    },
  ],
  cursos: [
    {
      title: 'Pokedex Map Dev Week',
      description:
        'Uma Pokédex interativa desenvolvida para fins de aprendizado, exibindo informações de Pokémon de forma visual e organizada.',
      technologies: ['HTML', 'JavaScript', 'CSS'],
      image: '/projetos/mapadev.webp',
      link: 'https://pokedex-mapadev-debs.vercel.app',
      github: 'https://github.com/debs-veras/pokedex-mapadev',
    },

    {
      title: 'Efeito Parallax',
      description:
        'Este projeto demonstra o efeito parallax utilizando imagens em uma página web.',
      technologies: ['HTML', 'CSS'],
      image: '/projetos/parallax.webp',
      link: 'https://parallax-debs.vercel.app',
      github: 'https://github.com/debs-veras/parallax',
    },
    {
      title: 'Site de Notícia',
      description:
        'Projeto de estudo de um site de notícias simulado com layout de portal informativo.',
      technologies: ['HTML', 'CSS'],
      image: '/projetos/blog-noticia.webp',
      link: 'https://blog-noticia-debs.vercel.app',
      github: 'https://github.com/debs-veras/blog-noticia',
    },
    {
      title: 'App Lista Tarefas',
      description:
        'Uma aplicação web simples e funcional para gerenciamento de tarefas (To-Do List), desenvolvida em PHP com arquitetura MVC (Model-View-Controller) e integração com banco de dados MySQL.',
      technologies: ['PHP', 'HTML', 'JavaScript', 'CSS'],
      image: '/projetos/app-lista-tarefas.webp',
      github: 'https://github.com/debs-veras/app_lista_tarefas',
    },
    {
      title: 'App Help Desk',
      description:
        'App Help Desk é uma aplicação simples em PHP para gerenciamento de chamados (help desk), construída para fins didáticos. Permite que usuários registrem, visualizem e gerenciem solicitações de suporte técnico.(Credenciais para login estão no README do projeto).',
      technologies: ['HTML', 'JavaScript', 'CSS', 'Bootstrap', 'PHP'],
      image: '/projetos/app-desk.webp',
      github: 'https://github.com/debs-veras/app_help_desk.git',
    },
    {
      title: 'Pokedex Completa',
      description:
        'Esse repositório contém a Pokédex completa que foi construída durante um tutorial no YouTube pelo canal Manual do Dev, usando as linguagens de front‑end HTML, CSS e JavaScript para criar uma aplicação interativa que lista Pokémons e mostra detalhes sobre eles.',
      technologies: ['HTML', 'JavaScript', 'CSS'],
      image: '/projetos/pokedex-completa.webp',
      link: 'https://pokedex-completo-debs.vercel.app',
      github: 'https://github.com/debs-veras/pokedex-completo',
    },
    {
      title: 'Mata Mosquito',
      description:
        'Um jogo simples e divertido onde o objetivo é matar os mosquitos que aparecem na tela dentro de um certo tempo. O jogo possui múltiplos níveis de dificuldade e aumenta a velocidade conforme você progride.',
      technologies: ['HTML', 'JavaScript', 'CSS', 'Bootstrap'],
      image: '/projetos/mata-mosquito.webp',
      link: 'https://game-mata-mosquito-debs.vercel.app',
      github: 'https://github.com/debs-veras/game-mata-mosquito',
    },
    {
      title: 'Museu Nacional',
      description:
        'Site fictício do Museu Nacional, desenvolvido exclusivamente para fins educacionais. O objetivo é praticar conceitos de desenvolvimento web utilizando HTML, CSS e JavaScript.',
      technologies: ['HTML', 'CSS'],
      image: '/projetos/museu-nacional.webp',
      link: 'https://site-museu-debs.vercel.app',
      github: 'https://github.com/debs-veras/site-museu',
    },
    {
      title: 'Organo',
      description:
        'Organo é uma aplicação web desenvolvida com fins educativos, que permite organizar pessoas e times de forma visual e intuitiva.',
      technologies: ['HTML', 'CSS', 'React'],
      image: '/projetos/organo.webp',
      link: 'https://organo-sage-omega.vercel.app/',
      github: 'https://github.com/debs-veras/organo',
    },
  ],
};

const TABS: { id: Category; label: string }[] = [
  { id: 'web', label: 'Web' },
  { id: 'academico', label: 'Acadêmicos' },
  { id: 'cursos', label: 'Cursos & Práticas' },
];

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<Category>('web');
  const [currentPage, setCurrentPage] = useState(1);
  const isMobile = useIsMobile();

  const ITEMS_PER_PAGE = 6;
  const filteredProjects = PROJECTS[activeTab] || [];
  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);

  const currentProjects = filteredProjects.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleTabChange = (tabId: Category) => {
    setActiveTab(tabId);
    setCurrentPage(1);
  };

  return (
    <>
      <section id="projects" className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="relative text-center py-16"
          >
            {/* PlasmaWave no desktop, gradiente estático no mobile */}
            <div className="absolute inset-0 z-0 opacity-40">
              {isMobile ? (
                <div
                  className="w-full h-full"
                  style={{
                    background:
                      'radial-gradient(ellipse at center, rgba(168,85,247,0.3) 0%, rgba(6,182,212,0.15) 40%, transparent 70%)',
                  }}
                />
              ) : (
                <PlasmaWave
                  colors={['#A855F7', '#06B6D4']}
                  speed1={0.05}
                  speed2={0.05}
                  focalLength={0.8}
                  bend1={1}
                  bend2={0.5}
                  dir2={1}
                  rotationDeg={0}
                />
              )}
            </div>

            {/* Conteúdo do título */}
            <div className="relative z-10 px-4">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6">
                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-purple-600 dark:text-purple-300 sm:text-xs">
                  Universo Criativo
                </span>
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4 font-heading drop-shadow-md">
                Transformando Ideias em Experiências
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto sm:text-lg drop-shadow">
                Explore uma jornada através de aplicações inovadoras, unindo
                design intuitivo, performance e código de alta qualidade para
                resolver desafios reais.
              </p>
            </div>
          </motion.div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`relative px-6 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'text-white shadow-lg shadow-purple-500/25'
                    : 'text-muted-foreground hover:text-foreground bg-white/5 dark:bg-white/5 hover:bg-white/10 dark:hover:bg-white/10 border border-black/5 dark:border-white/10'
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full -z-10"
                    transition={{ type: 'spring', duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Grid de Projetos */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          >
            <AnimatePresence mode="popLayout">
              {currentProjects.map((project, index) => (
                <motion.div
                  layout
                  key={`${project.title}-${activeTab}`}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group relative rounded-2xl border border-black/10 dark:border-white/10 bg-white/50 dark:bg-neutral-900/50 overflow-hidden backdrop-blur-sm hover:border-purple-500/50 dark:hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 flex flex-col h-full"
                >
                  {/* Imagem Container */}
                  <div className="aspect-video overflow-hidden relative border-b border-black/10 dark:border-white/10 shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80';
                      }}
                    />

                    {/* Overlay Ações (Hover) */}
                    <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-4 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2.5 bg-purple-600 rounded-full text-white hover:bg-purple-500 transition-colors shadow-lg shadow-purple-900/20"
                          title="Ver projeto ao vivo"
                        >
                          <IconExternalLink size={20} />
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2.5 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-colors border border-white/30 shadow-lg"
                          title="Ver código fonte"
                        >
                          <IconBrandGithub size={20} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Conteúdo */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-6 flex-grow">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.technologies?.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider rounded-full bg-purple-100 dark:bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Paginação */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="p-2 rounded-full border border-black/10 dark:border-white/10 bg-white/50 dark:bg-neutral-900/50 text-foreground hover:bg-purple-50 dark:hover:bg-purple-900/20 hover:text-purple-600 dark:hover:text-purple-400 disabled:opacity-50 disabled:pointer-events-none transition-colors"
              >
                <IconChevronLeft size={20} />
              </button>

              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-medium transition-all ${
                      currentPage === i + 1
                        ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/25'
                        : 'text-muted-foreground hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>

              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="p-2 rounded-full border border-black/10 dark:border-white/10 bg-white/50 dark:bg-neutral-900/50 text-foreground hover:bg-purple-50 dark:hover:bg-purple-900/20 hover:text-purple-600 dark:hover:text-purple-400 disabled:opacity-50 disabled:pointer-events-none transition-colors"
              >
                <IconChevronRight size={20} />
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
