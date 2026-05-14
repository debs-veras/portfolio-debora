import { motion } from 'framer-motion';
import { 
  IconBrandReact, 
  IconBrandTypescript, 
  IconBrandTailwind, 
  IconBrandNodejs,
  IconBrandNextjs,
  IconBrandFigma,
  IconBrandGit,
  IconDatabase
} from '@tabler/icons-react';

const skills = [
  { name: 'React', icon: IconBrandReact, color: '#61DAFB' },
  { name: 'TypeScript', icon: IconBrandTypescript, color: '#3178C6' },
  { name: 'Next.js', icon: IconBrandNextjs, color: '#ffffff' },
  { name: 'Tailwind CSS', icon: IconBrandTailwind, color: '#06B6D4' },
  { name: 'Node.js', icon: IconBrandNodejs, color: '#339933' },
  { name: 'Git', icon: IconBrandGit, color: '#F05032' },
  { name: 'SQL/NoSQL', icon: IconDatabase, color: '#336791' },
  { name: 'Figma', icon: IconBrandFigma, color: '#F24E1E' },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
             <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
              Minhas <span className="text-purple-500">Habilidades</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tecnologias que utilizo no meu dia a dia para construir aplicações modernas e escaláveis.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="flex flex-col items-center justify-center p-6 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-sm hover:border-purple-500/50 dark:hover:border-purple-500/50 transition-colors group shadow-lg"
            >
              <skill.icon size={48} stroke={1.5} className="mb-4 transition-transform group-hover:scale-110" style={{ color: skill.color === '#ffffff' ? undefined : skill.color }} />
              <span className="text-sm font-medium text-foreground">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
