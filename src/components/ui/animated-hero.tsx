import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroTeamImage from "@/assets/hero-team.png";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["confiable", "profesional", "seguro", "rápido", "completo"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 py-20 lg:py-40 items-center">
          <div className="flex gap-8 items-center justify-center flex-col lg:items-start">
            <div>
              <Button variant="secondary" size="sm" className="gap-4">
                Conoce nuestros servicios <MoveRight className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex gap-4 flex-col">
              <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center lg:text-left font-regular">
                <span className="text-foreground">Soporte técnico</span>
                <span className="relative flex w-full justify-center lg:justify-start overflow-hidden text-center lg:text-left md:pb-4 md:pt-1">
                  &nbsp;
                  {titles.map((title, index) => (
                    <motion.span
                      key={index}
                      className="absolute font-semibold text-primary"
                      initial={{ opacity: 0, y: "-100" }}
                      transition={{ type: "spring", stiffness: 50 }}
                      animate={
                        titleNumber === index
                          ? {
                              y: 0,
                              opacity: 1,
                            }
                          : {
                              y: titleNumber > index ? -150 : 150,
                              opacity: 0,
                            }
                      }
                    >
                      {title}
                    </motion.span>
                  ))}
                </span>
              </h1>

              <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center lg:text-left">
                Brindamos soporte técnico especializado para empresas que buscan optimizar 
                su infraestructura tecnológica. Nuestro equipo experto garantiza soluciones 
                rápidas y efectivas para mantener tu negocio funcionando sin interrupciones.
              </p>
            </div>
            <div className="flex flex-row gap-3">
              <Button size="lg" className="gap-4" variant="outline">
                Solicitar Consulta <PhoneCall className="w-4 h-4" />
              </Button>
              <Button size="lg" className="gap-4">
                Ver Servicios <MoveRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img 
                src={heroTeamImage} 
                alt="Equipo de soporte técnico de Proventa trabajando en infraestructura IT" 
                className="w-full max-w-lg h-auto rounded-2xl shadow-elegant"
              />
              <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };