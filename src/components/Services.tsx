import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Monitor,
  Network,
  Shield,
  Cloud,
  Wrench,
  Headphones,
} from "lucide-react";
import supportImage from "@/assets/tecnico-3.jpg";
import networkImage from "@/assets/tecnico-2.jpg";
import securityImage from "@/assets/tecnico.jpg";

const Services = () => {
  const services = [
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Soporte Técnico 8/5",
      description:
        "Asistencia técnica de lunes a viernes remoto y presencial para resolver cualquier problema informático que pueda afectar tu productividad.",
      image: supportImage,
      features: [
        "Respuesta inmediata",
        "Soporte remoto",
        "Técnicos certificados",
      ],
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Soporte y Mantenimiento",
      description:
        "Soporte, Optimizacion y mantenimiento de equipos y Software atendiendo fallas y problemas",
      image: networkImage,
      features: [
        "Optimizacion de rendimiento, velocidad de arranque",
        "Soporte preventivo y correctivo",
        "Atencion a requerimientos de drivers o mal funcionamiento de Hardware",
      ],
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Limpieza de Equipos",
      description:
        "Limpieza de equipos cada 30 dias, eliminacion de virus, malware, etc.",
      image: securityImage,
      features: [
        "Limpieza Fisica exhaustiva, polvo y suciedad en equipos",
        "Limpieza lógica, eliminacion de archivos temporales y optimizacion de registroa",
        "Actualizacion periodica y gestion de cuentas de usuario",
      ],
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Asistencia y Consultoría",
      description:
        "Mano de obra especializada para Asesoria, instalacion de software y hardware",
      image: supportImage,
      features: [
        "Instalacion de componentes",
        "Orientacion y recomendaciones para implementacion de nuevas tecnologias",
        "Apoyo en la seleccion y compra de equipos, componentes y productos electronicos",
      ],
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Servicios Adicionales",
      description: "Respaldo de informacion y Soporte Digital para su empresa",
      image: securityImage,
      features: [
        "Respaldo remoto mensual de informacion critica de los equipos para garantizar la seguridad de sus datos ante cualquier eventualidad",
        "Asistencia tecnica completa para su sitio web, correos electronicos y presencia en linea",
      ],
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Consultoría TI",
      description:
        "Asesoramiento estratégico para optimizar tu infraestructura tecnológica y procesos empresariales.",
      image: securityImage,
      features: [
        "Estrategia tecnológica",
        "Optimización de procesos",
        "ROI mejorado",
      ],
    },
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
            <Card
              key={index}
              className="group hover:shadow-glow hover:-translate-y-2 transition-all duration-500 border-0 shadow-card bg-card hover:bg-primary/5 cursor-pointer"
            >
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
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
