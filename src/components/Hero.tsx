import { Hero } from "@/components/ui/animated-hero";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12 px-4"
    >
      <div className="w-full h-full flex items-center justify-center">
        <Hero />
      </div>
    </section>
  );
};

export default HeroSection;
