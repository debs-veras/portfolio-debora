import { motion } from 'framer-motion';
import { IconMail, IconBrandLinkedin, IconBrandGithub, IconMapPin } from '@tabler/icons-react';

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
                Vamos <span className="text-purple-500">Conversar!</span>
              </h2>
              <p className="text-muted-foreground max-w-md">
                Estou sempre aberta a novas oportunidades e desafios. 
                Se você tem um projeto em mente ou quer apenas dizer um oi, me mande uma mensagem!
              </p>
            </div>

            <div className="space-y-6">
              <a href="mailto:contato@debora.dev" className="flex items-center gap-4 text-muted-foreground hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10">
                  <IconMail />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Email</p>
                  <p className="text-sm">contato@debora.dev</p>
                </div>
              </a>
              
              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10">
                  <IconMapPin />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Localização</p>
                  <p className="text-sm">Brasil (Remoto)</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-foreground hover:bg-purple-600 hover:text-white hover:border-purple-500 transition-all shadow-lg">
                <IconBrandLinkedin />
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-foreground hover:bg-purple-600 hover:text-white hover:border-purple-500 transition-all shadow-lg">
                <IconBrandGithub />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 p-8 backdrop-blur-md shadow-2xl shadow-purple-900/10"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">Nome</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all"
                  placeholder="Seu nome"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all"
                  placeholder="seu@email.com"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">Mensagem</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all resize-none"
                  placeholder="Como posso te ajudar?"
                />
              </div>
              <button 
                type="submit"
                className="w-full rounded-xl bg-purple-600 px-8 py-4 text-sm font-bold text-white hover:bg-purple-500 transition-colors shadow-lg shadow-purple-600/25"
              >
                Enviar Mensagem
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
