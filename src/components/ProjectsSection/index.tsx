import { motion } from 'framer-motion';
import { IconExternalLink, IconBrandGithub } from '@tabler/icons-react';
import fesImg from '@/assets/FES.png';

const projects = [
  {
    id: 1,
    title: 'Fórum de Engenharia de Software',
    description: 'Plataforma oficial do FES com área de submissão de artigos, programação do evento e sistema de inscrição, focado em performance e UX.',
    image: fesImg,
    techs: ['React', 'TypeScript', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 2,
    title: 'Dashboard Analítico',
    description: 'Painel administrativo avançado para visualização de dados complexos com gráficos interativos, atualizações em tempo real e tema customizável.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    techs: ['Next.js', 'Framer Motion', 'Recharts'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 3,
    title: 'E-commerce UI',
    description: 'Interface completa e moderna para loja virtual, com carrinho de compras dinâmico, filtros avançados e processo de checkout otimizado.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    techs: ['React', 'Zustand', 'Stripe'],
    liveUrl: '#',
    githubUrl: '#',
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-purple-500/25 bg-purple-500/10 px-4 py-1.5 mb-6">
            <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-purple-600 dark:text-purple-300 sm:text-xs">
              Portfólio
            </span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4 font-heading">
            Meus <span className="text-purple-500">Projetos</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto sm:text-lg">
            Uma seleção dos meus melhores trabalhos recentes, demonstrando minha 
            experiência em criar interfaces de usuário excepcionais.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl border border-black/10 dark:border-white/10 bg-white/50 dark:bg-neutral-900/50 overflow-hidden backdrop-blur-sm hover:border-purple-500/50 dark:hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10"
            >
              {/* Image Container */}
              <div className="aspect-video overflow-hidden relative border-b border-black/10 dark:border-white/10">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay Actions */}
                <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-4 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <a href={project.liveUrl} className="p-2.5 bg-purple-600 rounded-full text-white hover:bg-purple-500 transition-colors shadow-lg shadow-purple-900/20" title="Ver projeto ao vivo">
                    <IconExternalLink size={20} />
                  </a>
                  <a href={project.githubUrl} className="p-2.5 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-colors border border-white/20 shadow-lg" title="Ver código fonte">
                    <IconBrandGithub size={20} />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-6 line-clamp-3">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.techs.map(tech => (
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
        </div>
      </div>
    </section>
  );
}
