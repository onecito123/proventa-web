import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { ContactCard } from "@/components/ui/contact-card";
import { MailIcon, PhoneIcon, MapPinIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const CTA = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contacto");
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
      {/* Fondo con degradado moderno */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800"></div>

      {/* Efecto de profundidad con otro degradado superpuesto */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-blue-900/20"></div>

      {/* Patrón sutil de ruido para textura */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZmlsbC1vcGFjaXR5PSIwLjAyIiBkPSJNMCAwaDQwdjQwSDB6Ii8+PC9zdmc+')]"></div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          ¿Listo para tenernos en tu equipo?
        </h2>

        <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
          Consigue un departamento TI completo por menos del sueldo de un
          técnico. 15 empresas de Punta Arenas ya eliminaron costos fijos con
          nuestro soporte especializado presencial y remoto. Agenda tu
          consultoría gratuita hoy — sin compromiso, solo resultados.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            size="sm"
            className="bg-white text-blue-700 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300 text-lg px-8 py-4"
            onClick={scrollToContact}
          >
            Consultoría Gratuita
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
