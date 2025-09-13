import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Monitor, Network, Shield, Cloud, Wrench, Headphones } from "lucide-react";
import supportImage from "@/assets/service-support.jpg";
import networkImage from "@/assets/service-network.jpg";
import securityImage from "@/assets/service-security.jpg";

const Services = () => {
  const services = [
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Soporte Técnico 24/7",
      description: "Asistencia técnica inmediata para resolver cualquier problema informático que pueda afectar tu productividad.",
      image: supportImage,
      features: ["Respuesta inmediata", "Soporte remoto", "Técnicos certificados"]
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Infraestructura de Red",
      description: "Diseño, implementación y mantenimiento de redes corporativas robustas y escalables.",
      image: networkImage,
      features: ["Redes escalables", "Alta disponibilidad", "Monitoreo continuo"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Ciberseguridad",
      description: "Protección integral contra amenazas digitales con las mejores prácticas de seguridad informática.",
      image: securityImage,
      features: ["Protección avanzada", "Auditorías de seguridad", "Backup automático"]
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Migración a la Nube",
      description: "Transición segura y eficiente de tus sistemas hacia infraestructuras cloud modernas.",
      image: supportImage,
      features: ["Migración segura", "Optimización de costos", "Escalabilidad automática"]
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Mantenimiento Preventivo",
      description: "Mantenimiento proactivo de equipos y sistemas para prevenir fallas y optimizar rendimiento.",
      image: networkImage,
      features: ["Mantenimiento proactivo", "Diagnósticos avanzados", "Actualizaciones automáticas"]
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Consultoría TI",
      description: "Asesoramiento estratégico para optimizar tu infraestructura tecnológica y procesos empresariales.",
      image: securityImage,
      features: ["Estrategia tecnológica", "Optimización de procesos", "ROI mejorado"]
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ofrecemos soluciones tecnológicas integrales diseñadas para impulsar 
            el crecimiento y la eficiencia de tu empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-glow hover:-translate-y-2 transition-all duration-500 border-0 shadow-card bg-card hover:bg-primary/5 cursor-pointer">
              <CardHeader className="pb-4">
                <div className="relative mb-4 h-48 rounded-lg overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-primary/60 group-hover:bg-primary/40 transition-all duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-all duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-6 leading-relaxed group-hover:text-foreground transition-colors duration-300">
                  {service.description}
                </CardDescription>
                
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300 hover:shadow-lg"
                >
                  Más Información
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:shadow-glow transition-all duration-300 px-8 py-4 text-lg"
          >
            Ver Todos los Servicios
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;