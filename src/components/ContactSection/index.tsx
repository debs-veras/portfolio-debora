import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import emailjs from "@emailjs/browser";
import { 
  IconMail, 
  IconBrandLinkedin, 
  IconBrandGithub, 
  IconMapPin, 
  IconBrandWhatsapp,
  IconLoader2,
  IconCheck,
  IconX,
  IconSend
} from '@tabler/icons-react';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Nome deve ter pelo menos 2 caracteres" }),
  title: z.string().min(2, { message: "Assunto deve ter pelo menos 2 caracteres" }),
  email: z.string().email({ message: "Por favor, insira um email válido" }),
  message: z.string().min(10, { message: "Mensagem deve ter pelo menos 10 caracteres" }),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [showNotification, setShowNotification] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isValid },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: "onChange",
  });

  useEffect(() => {
    if (submitStatus !== "idle") {
      setShowNotification(true);
      const timer = setTimeout(() => {
        setShowNotification(false);
        setTimeout(() => setSubmitStatus("idle"), 500);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      await emailjs.send(
        "service_vwfw4um",
        "template_iqojkoe",
        {
          from_name: data.name,
          reply_to: data.email,
          message: data.message,
          title: data.title,
        },
        "vZYYE4yFx_ZH7fc1U"
      );

      setSubmitStatus("success");
      reset();
    } catch (error) {
      console.error("Failed to send email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Notification Toast */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, y: 20, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 20, x: '-50%' }}
            className="fixed bottom-6 left-1/2 z-50 w-full max-w-xs sm:max-w-md px-4"
          >
            {submitStatus === "success" && (
              <div className="flex items-center bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 px-4 py-3 rounded-2xl shadow-xl backdrop-blur-md">
                <IconCheck className="mr-2 h-5 w-5" /> 
                <span className="text-sm font-medium">Mensagem enviada com sucesso!</span>
              </div>
            )}
            {submitStatus === "error" && (
              <div className="flex items-center bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 px-4 py-3 rounded-2xl shadow-xl backdrop-blur-md">
                <IconX className="mr-2 h-5 w-5" /> 
                <span className="text-sm font-medium">Erro ao enviar mensagem. Tente novamente.</span>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
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
              <a href="mailto:deborahellenvp@gmail.com" className="flex items-center gap-4 text-muted-foreground hover:text-purple-600 dark:hover:text-purple-400 transition-colors group">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 group-hover:border-purple-500/50 transition-colors">
                  <IconMail className="group-hover:text-purple-500 transition-colors" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Email</p>
                  <p className="text-sm">deborahellenvp@gmail.com</p>
                </div>
              </a>

              <a href="https://wa.me/5588992531384" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-muted-foreground hover:text-purple-600 dark:hover:text-purple-400 transition-colors group">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 group-hover:border-purple-500/50 transition-colors">
                  <IconBrandWhatsapp className="group-hover:text-purple-500 transition-colors" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">WhatsApp</p>
                  <p className="text-sm">(88) 99253-1384</p>
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
              <a href="https://www.linkedin.com/in/debora-hellen-711955194" target="_blank" rel="noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-foreground hover:bg-purple-600 hover:text-white hover:border-purple-500 transition-all shadow-lg">
                <IconBrandLinkedin />
              </a>
              <a href="https://github.com/debs-veras" target="_blank" rel="noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-foreground hover:bg-purple-600 hover:text-white hover:border-purple-500 transition-all shadow-lg">
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
            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">Nome *</label>
                <input 
                  {...register("name")}
                  type="text" 
                  id="name" 
                  className={`w-full rounded-xl border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 transition-all ${
                    errors.name 
                      ? "border-red-500 focus:border-red-500 focus:ring-red-500" 
                      : "border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 focus:border-purple-500 focus:ring-purple-500"
                  }`}
                  placeholder="Seu nome"
                />
                {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">Email *</label>
                <input 
                  {...register("email")}
                  type="email" 
                  id="email" 
                  className={`w-full rounded-xl border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 transition-all ${
                    errors.email 
                      ? "border-red-500 focus:border-red-500 focus:ring-red-500" 
                      : "border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 focus:border-purple-500 focus:ring-purple-500"
                  }`}
                  placeholder="seu@email.com"
                />
                {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
              </div>

              <div className="space-y-2">
                <label htmlFor="title" className="text-sm font-medium text-foreground">Assunto *</label>
                <input 
                  {...register("title")}
                  type="text" 
                  id="title" 
                  className={`w-full rounded-xl border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 transition-all ${
                    errors.title 
                      ? "border-red-500 focus:border-red-500 focus:ring-red-500" 
                      : "border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 focus:border-purple-500 focus:ring-purple-500"
                  }`}
                  placeholder="Qual o assunto?"
                />
                {errors.title && <p className="text-xs text-red-500">{errors.title.message}</p>}
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">Mensagem *</label>
                <textarea 
                  {...register("message")}
                  id="message" 
                  rows={4}
                  className={`w-full rounded-xl border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 transition-all resize-none ${
                    errors.message 
                      ? "border-red-500 focus:border-red-500 focus:ring-red-500" 
                      : "border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 focus:border-purple-500 focus:ring-purple-500"
                  }`}
                  placeholder="Como posso te ajudar?"
                />
                {errors.message && <p className="text-xs text-red-500">{errors.message.message}</p>}
              </div>

              <button 
                type="submit"
                disabled={isSubmitting || !isDirty || !isValid}
                className="w-full rounded-xl bg-purple-600 px-8 py-4 text-sm font-bold text-white hover:bg-purple-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-purple-600/25 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <IconLoader2 className="animate-spin h-5 w-5" />
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <IconSend className="h-5 w-5" />
                    <span>Enviar Mensagem</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
