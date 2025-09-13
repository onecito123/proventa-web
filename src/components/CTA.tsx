import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/90"></div>
      
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          ¿Listo para Transformar tu Infraestructura TI?
        </h2>
        
        <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
          Únete a más de 500 empresas que ya confían en Proventa para sus soluciones tecnológicas. 
          Obtén una consulta gratuita y descubre cómo podemos optimizar tu negocio.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-blue-50 shadow-elegant hover:shadow-glow transition-all duration-300 text-lg px-8 py-4"
          >
            Consulta Gratuita
            <ArrowRight className="ml-2" size={20} />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-primary transition-all duration-300 text-lg px-8 py-4"
          >
            Llamar Ahora
            <Phone className="ml-2" size={20} />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <div className="flex items-center justify-center space-x-3">
            <Phone className="text-blue-200" size={24} />
            <div>
              <div className="font-semibold">Teléfono</div>
              <div className="text-blue-200">+1 (555) 123-4567</div>
            </div>
          </div>
          
          <div className="flex items-center justify-center space-x-3">
            <Mail className="text-blue-200" size={24} />
            <div>
              <div className="font-semibold">Email</div>
              <div className="text-blue-200">contacto@proventa.com</div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-blue-200">
          <p className="text-lg">
            🔒 Consulta 100% confidencial | ⚡ Respuesta en menos de 24 horas | 🎯 Sin compromiso
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;