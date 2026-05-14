import { type Variants } from 'motion/react';
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconArrowRight,
  IconDownload,
  IconSparkles,
  IconBolt,
  IconBrandReact,
  IconBrandTypescript,
  IconBrandTailwind,
  IconBrandNodejs,
  IconBrandGit,
  IconBrandJavascript,
} from '@tabler/icons-react';
import heroImg from '@/assets/hero.png';
import heroImgLight from '@/assets/hero-light.png';
import TextType from '../TextType';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { useEffect } from 'react';
/* ─── Animation Variants ─── */

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' as const },
  },
};

const fadeRight = (delay: number) => ({
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0 },
  transition: { delay, duration: 0.6, ease: 'easeOut' as const },
});

const fadeLeft = (delay: number) => ({
  initial: { opacity: 0, x: -30, y: 15 },
  animate: { opacity: 1, x: 0, y: 0 },
  transition: { delay, duration: 0.5, ease: 'easeOut' as const },
});

/* ─── Data ─── */

const socialLinks = [
  {
    Icon: IconBrandGithub,
    href: 'https://github.com/debs-veras',
    label: 'GitHub',
  },
  {
    Icon: IconBrandLinkedin,
    href: 'https://www.linkedin.com/in/debora-hellen-711955194',
    label: 'LinkedIn',
  },
  { Icon: IconMail, href: 'mailto:deborahellenvp@gmail.com', label: 'Email' },
];

const techs = [
  { Icon: IconBrandReact, name: 'React', color: '#61DAFB' },
  { Icon: IconBrandTypescript, name: 'TypeScript', color: '#3178C6' },
  { Icon: IconBrandTailwind, name: 'Tailwind', color: '#06B6D4' },
  { Icon: IconBrandJavascript, name: 'JavaScript', color: '#F7DF1E' },
  { Icon: IconBrandNodejs, name: 'Node.js', color: '#6DA35F' },
  { Icon: IconBrandGit, name: 'Git', color: '#F05032' },
];

/* ─── Floating Card: Code Snippet ─── */
function CodeSnippetCard() {
  return (
    <motion.div
      {...fadeRight(0.7)}
      className="w-[210px] rounded-xl border border-black/10 dark:border-white/10 bg-white/90 dark:bg-neutral-950/90 p-3.5 shadow-2xl shadow-purple-900/10 dark:shadow-purple-900/20 backdrop-blur-md xl:w-[230px]"
    >
      <div className="mb-2.5 flex items-center justify-between">
        <span className="font-mono text-sm font-bold text-purple-600 dark:text-purple-400">
          &lt;/&gt;
        </span>
        <div className="flex gap-1.5">
          <div className="h-2 w-2 rounded-full bg-red-500/70" />
          <div className="h-2 w-2 rounded-full bg-yellow-500/70" />
          <div className="h-2 w-2 rounded-full bg-green-500/70" />
        </div>
      </div>
      <div className="space-y-0.5 font-mono text-[9px] leading-[18px] xl:text-[10px]">
        <p>
          <span className="text-purple-600 dark:text-purple-400">const</span>
          <span className="text-blue-600 dark:text-blue-300">
            {' '}
            DeboraHellen
          </span>
          <span className="text-neutral-700 dark:text-white/80">
            {' '}
            = () =&gt; {'{'}
          </span>
        </p>
        <p className="pl-3">
          <span className="text-purple-600 dark:text-purple-400">return</span>
          <span className="text-neutral-700 dark:text-white/80"> (</span>
        </p>
        <p className="pl-5">
          <span className="text-neutral-700 dark:text-white/80">&lt;</span>
          <span className="text-green-600 dark:text-green-400">div</span>
          <span className="text-blue-600 dark:text-blue-300"> className</span>
          <span className="text-orange-600 dark:text-orange-300">
            ="creative"
          </span>
          <span className="text-neutral-700 dark:text-white/80">&gt;</span>
        </p>
        <p className="pl-7">
          <span className="text-neutral-700 dark:text-white/80">&lt;</span>
          <span className="text-green-600 dark:text-green-400">p</span>
          <span className="text-neutral-700 dark:text-white/80">&gt;</span>
          <span className="text-gray-500 dark:text-gray-400">
            Code. Design. Impact.
          </span>
          <span className="text-neutral-700 dark:text-white/80">&lt;/</span>
          <span className="text-green-600 dark:text-green-400">p</span>
          <span className="text-neutral-700 dark:text-white/80">&gt;</span>
        </p>
        <p className="pl-5">
          <span className="text-neutral-700 dark:text-white/80">&lt;/</span>
          <span className="text-green-600 dark:text-green-400">div</span>
          <span className="text-neutral-700 dark:text-white/80">&gt;</span>
        </p>
        <p className="pl-3">
          <span className="text-neutral-700 dark:text-white/80">)</span>
        </p>
        <p>
          <span className="text-neutral-700 dark:text-white/80">{'}'}</span>
        </p>
      </div>
    </motion.div>
  );
}
/* ─── Floating Card: UI/UX ─── */
function UiUxCard() {
  return (
    <motion.div
      {...fadeRight(0.95)}
      className="w-[190px] rounded-xl border border-black/10 dark:border-white/10 bg-white/90 dark:bg-neutral-950/90 p-3.5 shadow-2xl shadow-purple-900/10 dark:shadow-purple-900/20 backdrop-blur-md xl:w-[210px]"
    >
      <div className="mb-2.5 flex items-center gap-2.5">
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-purple-500/30 bg-purple-100 dark:bg-purple-600/20">
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-purple-600 dark:text-purple-400"
          >
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            <polyline points="3.29 7 12 12 20.71 7" />
            <line x1="12" y1="22" x2="12" y2="12" />
          </svg>
        </div>
        <div>
          <p className="text-[11px] font-semibold text-foreground">
            UI/UX Focused
          </p>
          <p className="text-[9px] text-muted-foreground">
            Design that connects
          </p>
        </div>
      </div>
      <div className="space-y-1.5">
        <div className="h-1 w-full rounded-full bg-black/10 dark:bg-white/10">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '85%' }}
            transition={{ delay: 1.6, duration: 1, ease: 'easeOut' as const }}
            className="h-1 rounded-full bg-gradient-to-r from-purple-500 to-violet-400 dark:from-purple-600 dark:to-violet-400"
          />
        </div>
        <div className="h-1 w-full rounded-full bg-black/10 dark:bg-white/10">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '60%' }}
            transition={{ delay: 1.8, duration: 1, ease: 'easeOut' as const }}
            className="h-1 rounded-full bg-gradient-to-r from-purple-500/80 to-violet-400/80 dark:from-purple-600/80 dark:to-violet-400/80"
          />
        </div>
      </div>
    </motion.div>
  );
}
/* ─── Floating Card: Performance ─── */
function PerformanceCard() {
  return (
    <motion.div
      {...fadeRight(1.15)}
      className="w-[190px] rounded-xl border border-black/10 dark:border-white/10 bg-white/90 dark:bg-neutral-950/90 p-3.5 shadow-2xl shadow-blue-900/10 dark:shadow-purple-900/20 backdrop-blur-md xl:w-[210px]"
    >
      <div className="mb-2.5 flex items-center gap-2.5">
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-blue-500/30 bg-blue-100 dark:bg-blue-600/20">
          <IconBolt size={13} className="text-blue-600 dark:text-blue-400" />
        </div>
        <div>
          <p className="text-[11px] font-semibold text-foreground">
            Performance
          </p>
          <p className="text-[9px] text-muted-foreground">Fast & optimized</p>
        </div>
      </div>
      <div className="space-y-1.5">
        <div className="h-1 w-full rounded-full bg-black/10 dark:bg-white/10">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '92%' }}
            transition={{ delay: 2.0, duration: 1, ease: 'easeOut' as const }}
            className="h-1 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 dark:from-blue-600 dark:to-cyan-400"
          />
        </div>
        <div className="h-1 w-full rounded-full bg-black/10 dark:bg-white/10">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '72%' }}
            transition={{ delay: 2.2, duration: 1, ease: 'easeOut' as const }}
            className="h-1 rounded-full bg-gradient-to-r from-blue-500/80 to-cyan-400/80 dark:from-blue-600/80 dark:to-cyan-400/80"
          />
        </div>
      </div>
    </motion.div>
  );
}
/* ─── Floating Card: Clean Code ─── */
function CleanCodeCard() {
  return (
    <motion.div
      {...fadeLeft(1.05)}
      className="flex items-center gap-2.5 rounded-xl border border-black/10 dark:border-white/10 bg-white/90 dark:bg-neutral-950/90 p-3 shadow-2xl shadow-purple-900/10 dark:shadow-purple-900/20 backdrop-blur-md"
    >
      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-purple-500/30 bg-purple-100 dark:bg-purple-600/20">
        <IconSparkles
          size={13}
          className="text-purple-600 dark:text-purple-400"
        />
      </div>
      <div>
        <p className="text-[11px] font-semibold text-foreground">Clean Code</p>
        <p className="text-[9px] text-muted-foreground">
          Scalable & maintainable
        </p>
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════
   HERO SECTION
   ═══════════════════════════════════════════════════ */
export default function HeroSection() {
  const { theme } = useTheme();
  useEffect(() => {
    console.log(theme);
  }, [theme]);
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* ── HERO LAYOUT ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col">
            {/* ── LEFT: Text ── */}
            <motion.div
              className="shrink-0 space-y-5 sm:space-y-8 sm:pt-10"
              variants={stagger}
              initial="hidden"
              animate="visible"
            >
              {/* Badge */}
              <motion.div variants={fadeUp}>
                <span className="inline-flex items-center gap-2 rounded-full border border-purple-500/25 bg-purple-500/10 px-4 py-1.5">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-green-400 shadow-[0_0_6px_rgba(74,222,128,0.6)]" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary dark:text-purple-300 sm:text-xs">
                    Frontend Developer
                  </span>
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h1
                variants={fadeUp}
                className="font-heading text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl xl:text-[3.6rem]"
              >
                <TextType
                  text={[
                    'Oi! Eu sou a Débora Hellen',
                    'Desenvolvedora Full-stack com foco em Front-end',
                  ]}
                  typingSpeed={75}
                  pauseDuration={1500}
                  showCursor
                  cursorCharacter="_"
                  deletingSpeed={50}
                  cursorBlinkDuration={0.5}
                />
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                variants={fadeUp}
                className="text-sm leading-relaxed text-muted-foreground sm:text-[15px]"
              >
                Trabalho criando aplicações{' '}
                <span className="font-medium text-purple-400">frontend</span>{' '}
                que equilibram{' '}
                <span className="font-medium text-purple-300">
                  {' '}
                  arquitetura{' '}
                </span>
                e{' '}
                <span className="font-medium text-teal-400">
                  performance{' '}
                </span>{' '}
                com propósito. Gosto de frontend porque é onde lógica,
                criatividade e experiência real se encontram.
              </motion.p>

              {/* CTA */}
              <motion.div
                variants={fadeUp}
                className="flex flex-wrap items-center gap-3 sm:gap-4"
              >
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="flex cursor-pointer items-center gap-2 rounded-full bg-purple-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-purple-600/30 transition hover:bg-purple-500 sm:px-6 sm:py-3"
                >
                  Ver Projetos <IconArrowRight size={16} />
                </motion.a>
                <motion.a
                  href="https://drive.google.com/file/d/1WGQuOrh_K005q2CBl3Ip7e9Da5JSQ3om/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="flex cursor-pointer items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-foreground transition hover:bg-white/10 sm:px-6 sm:py-3"
                >
                  Ver Currículo <IconDownload size={16} />
                </motion.a>
              </motion.div>

              {/* Social */}
              <motion.div variants={fadeUp} className="p-4 sm:p-0">
                <p className="mb-2.5 text-xs text-muted-foreground">
                  Conecte-se comigo
                </p>
                <div className="flex items-center gap-2.5">
                  {socialLinks.map(({ Icon, href, label }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      whileHover={{ scale: 1.15, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-muted-foreground transition hover:border-purple-500/50 hover:text-foreground sm:h-10 sm:w-10"
                    >
                      <Icon size={17} />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
          {/* ── RIGHT: Character + Cards ── */}
          <div className="relative flex flex-1 items-end justify-center lg:justify-end  overflow-visible">
            <div className="relative h-[380px] w-full max-w-[560px] sm:h-[460px] lg:h-[580px] ">
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="absolute left-1/2 top-[42%] h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-500/15 lg:h-[430px] lg:w-[430px]"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
                className="absolute left-1/2 top-[42%] h-[270px] w-[270px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-purple-500/50  lg:h-[350px] lg:w-[350px]"
                style={{
                  boxShadow:
                    '0 0 80px rgba(139,92,246,0.35), 0 0 180px rgba(139,92,246,0.1), inset 0 0 80px rgba(139,92,246,0.05)',
                }}
              />

              <motion.img
                key={theme}
                src={theme === 'dark' ? heroImg : heroImgLight}
                alt="Developer character"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.8 }}
                className="absolute bottom-[-80px] sm:bottom-[-50px] lg:bottom-[-100px] left-1/2 -translate-x-1/2 object-contain h-[480px] sm:h-[520px] lg:h-[680px]"
                style={{
                  filter: 'drop-shadow(0 0 48px rgba(139,92,246,0.25))',
                }}
              />

              <div className="absolute -right-2 top-[5%] z-20 sm:-right-6 lg:top-0 xl:-right-10 scale-[0.65] sm:scale-90 lg:scale-100 origin-top-right">
                <CodeSnippetCard />
              </div>
              <div className="absolute -right-2 top-[45%] z-20 sm:-right-4 lg:top-[48%] xl:-right-25 scale-[0.65] sm:scale-90 lg:scale-100 origin-right">
                <UiUxCard />
              </div>
              <div className="absolute -right-2 bottom-[10%] z-20 sm:-right-4 lg:bottom-[12%] xl:-right-8 scale-[0.65] sm:scale-90 lg:scale-100 origin-bottom-right">
                <PerformanceCard />
              </div>
              <div className="absolute bottom-[%] -left-2 z-20 sm:left-0 lg:bottom-[28%] lg:-left-20 scale-[0.65] sm:scale-90 lg:scale-150 origin-bottom-left">
                <CleanCodeCard />
              </div>
            </div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="flex flex-col items-center gap-5 border-t border-white/10 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:py-6"
        >
          <div className="flex flex-wrap items-center gap-3 sm:gap-5">
            <span className="font-mono text-[9px] font-semibold uppercase tracking-widest text-purple-400 sm:text-[10px]">
              Minhas Especialidades:
            </span>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              {techs.map(({ Icon, name, color }) => (
                <motion.div
                  key={name}
                  whileHover={{ scale: 1.2, y: -3 }}
                  title={name}
                  className="cursor-default"
                >
                  <Icon
                    size={22}
                    style={{ color }}
                    className="sm:h-[26px] sm:w-[26px]"
                  />
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex gap-2.5">
            <span className="font-serif text-3xl leading-none text-purple-500/60 sm:text-4xl">
              "
            </span>
            <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
              Ferramenta não é diferencial. Decisão técnica é.
            </p>
            <span className="font-serif text-3xl leading-none text-purple-500/60 sm:text-4xl">
              "
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
