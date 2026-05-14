import { motion } from 'framer-motion';

const experiences = [
  {
    role: "Desenvolvedora Frontend Pleno",
    company: "Tech Solutions",
    period: "2023 - Presente",
    description: "Desenvolvimento de interfaces escaláveis com React e Next.js. Implementação de design systems e otimização de performance. Liderança técnica em projetos chave."
  },
  {
    role: "Desenvolvedora Frontend Júnior",
    company: "Creative Agency",
    period: "2021 - 2023",
    description: "Criação de landing pages e aplicações web focadas em conversão. Trabalho conjunto com designers (Figma) e integração com APIs REST."
  },
  {
    role: "Estagiária em Desenvolvimento Web",
    company: "Startup Innovate",
    period: "2020 - 2021",
    description: "Suporte no desenvolvimento de interfaces, manutenção de código legado e testes automatizados."
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-24 overflow-hidden">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
            Minha <span className="text-purple-500">Trajetória</span>
          </h2>
          <p className="text-muted-foreground">
            Experiência profissional e evolução na área de tecnologia.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:grid md:grid-cols-5 md:gap-8 md:items-start relative group">
                <div className="hidden md:block md:col-span-1 text-right mt-1">
                  <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">{exp.period}</span>
                </div>
                
                <div className="absolute left-0 top-2 md:left-[20%] md:-translate-x-1/2 w-3 h-3 rounded-full bg-purple-500 ring-4 ring-purple-500/20 group-hover:scale-125 transition-transform z-10" />
                
                {/* Line */}
                {i !== experiences.length - 1 && (
                  <div className="absolute left-1.5 top-6 md:left-[20%] w-px h-full bg-black/10 dark:bg-white/10" />
                )}

                <div className="md:col-span-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 p-6 backdrop-blur-sm group-hover:border-purple-500/30 transition-colors shadow-lg">
                  <span className="md:hidden text-xs font-semibold text-purple-600 dark:text-purple-400 mb-2 block">{exp.period}</span>
                  <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                  <h4 className="text-md font-medium text-muted-foreground mb-4">{exp.company}</h4>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
