import { useState } from 'react';
import { AnimatedThemeToggler } from '@/components/ui/animated-theme-toggler';
import { useTheme } from '@/contexts/ThemeContext';
import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  Navbar,
  NavbarButton,
  NavbarLogo,
  NavBody,
  NavItems,
} from '../ui/resizable-navbar';

export default function NavbarHome() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { toggleTheme } = useTheme();
  const navItems = [
    {
      name: 'Início',
      link: '#home',
    },
    {
      name: 'Sobre',
      link: '#about',
    },
    {
      name: 'Habilidades',
      link: '#skills',
    },
    {
      name: 'Projetos',
      link: '#projects',
    },
    {
      name: 'Contato',
      link: '#contact',
    },
  ];
  return (
    <Navbar className="mb-10 ">
      <NavBody>
        {/* LOGO */}
        <NavbarLogo />
        <NavItems items={navItems} />
        {/* THEME TOGGLE */}
        <div className="flex items-center gap-4">
          <NavbarButton variant="secondary">
            <AnimatedThemeToggler
              className="cursor-pointer hidden md:block"
              variant="circle"
              duration={600}
              fromCenter
            />
          </NavbarButton>
        </div>
      </NavBody>
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) => (
            <a
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative text-neutral-600 dark:text-neutral-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              <span className="block">{item.name}</span>
            </a>
          ))}
          <div className="flex w-full flex-col gap-4">
            <NavbarButton
              onClick={toggleTheme}
              variant="primary"
              className="w-full"
            >
              Toggle Theme
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
