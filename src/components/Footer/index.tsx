export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative border-t border-black/10 dark:border-white/10 bg-black/5 dark:bg-black/20 backdrop-blur-md py-8 mt-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground text-center md:text-left">
          &copy; {currentYear} Débora Hellen. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
