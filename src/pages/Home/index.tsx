import NavBarHome from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import Particles from '@/components/ui/particles';
import { LightRays } from '@/components/ui/light-rays';

export default function Home() {
  return (
    <>
      <Particles
        particleColors={['#7c3aed', '#a78bfa', '#8b5cf6', '#c4b5fd', '#6d28d9']}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={false}
        alphaParticles={false}
        disableRotation={false}
        pixelRatio={1}
      />
      <LightRays color="rgba(123, 57, 245, 0.25)" />
      <NavBarHome />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </>
  );
}
