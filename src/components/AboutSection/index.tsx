import { motion } from 'framer-motion';
import { IconCloud } from '../ui/icon-cloud';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
};

const slugs = [
  'typescript',
  'javascript',
  'java',
  'react',
  'html5',
  'css3',
  'nodedotjs',
  'express',
  'nextdotjs',
  'prisma',
  'amazonaws',
  'postgresql',
  'firebase',
  'nginx',
  'vercel',
  'testinglibrary',
  'jest',
  'cypress',
  'docker',
  'git',
  'jira',
  'github',
  'gitlab',
  'visualstudiocode',
  'androidstudio',
  'sonarqube',
  'figma',
];

const iconUrls = slugs.map((slug) => `https://cdn.simpleicons.org/${slug}`);

export default function AboutSection() {
  return (
    <section id="about" className="relative py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
          className="flex flex-col md:flex-row gap-12 items-center"
        >
          {/* Text Content */}
          <div className="flex-1 space-y-6">
            <motion.div variants={fadeUp}>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                Sobre <span className="text-purple-500">mim</span>
              </h2>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="text-muted-foreground leading-relaxed"
            >
              Sou uma desenvolvedora apaixonada por criar experiências web
              incríveis. Com um olhar atento ao design e à performance. Minha jornada
              na tecnologia é movida pela curiosidade e pelo desejo contínuo de
              aprender e melhorar.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-muted-foreground leading-relaxed"
            >
              Quando não estou codando, gosto de explorar novas tecnologias,
              contribuir para projetos open-source e me envolver com a
              comunidade de desenvolvedores.
            </motion.p>

            <motion.div variants={fadeUp} className="pt-4 flex gap-4">
              {/* Some stats or highlights */}
              <div className="p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex-1 text-center backdrop-blur-sm shadow-xl shadow-purple-500/5">
                <h3 className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                  3+
                </h3>
                <p className="text-xs text-muted-foreground">
                  Anos de Experiência
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex-1 text-center backdrop-blur-sm shadow-xl shadow-blue-500/5">
                <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  20+
                </h3>
                <p className="text-xs text-muted-foreground">
                  Projetos Entregues
                </p>
              </div>
            </motion.div>
          </div>

          {/* Visual/Image */}
          <motion.div
            variants={fadeUp}
            className="flex-1 w-full max-w-md relative flex items-center justify-center scale-125 md:scale-150"
          >
            <IconCloud images={iconUrls} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
