import { Hero } from "@/components/ui/animated-hero";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero">
      <Hero />
    </section>
  );
};

export default HeroSection;