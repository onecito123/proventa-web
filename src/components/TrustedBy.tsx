// Carrusel de logos de empresas

import { useRef } from "react";

const companyLogos = [
  {
    name: "Buses Fernandez",
    src: "https://www.almasurhoteles.cl/wp-content/uploads/2023/09/logo-almasur-hoteles-negro.png",
    alt: "Logo de Buses Fernandez",
  },
  {
    name: "Hotel Almassur",
    src: "https://www.genealog.cl/Chile/instituciones/B/buses/BusesFernandez-logo.png",
    alt: "Logo de Hotel Almassur",
  },
  {
    name: "Buses Fernandez",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrTGWPGkyBZcK7_3RWoBH-UwxncanM9APOYQ&s",
    alt: "Logo de Buses Fernandez",
  },
  {
    name: "Transpetrol",
    src: "https://media.licdn.com/dms/image/v2/C4E1BAQFFULi4a57H0A/company-background_10000/company-background_10000/0/1584396590493/transpetrol_cover?e=2147483647&v=beta&t=fOkCeS12ffQzVurDcNxBLidCRb2iVMHtOmbGrZQj3nE",
    alt: "Logo de Buses Fernandez",
  },
  {
    name: "Transpetrol",
    src: "https://scontent.fpuq4-1.fna.fbcdn.net/v/t39.30808-6/349319447_788717772639289_6954253163230921994_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=uGiDe75caCMQ7kNvwHx-5Z4&_nc_oc=AdkPNWTdNAjqOyaOQUUW0FsoJ2f5gqiWDvx-w65a3sO5dcCXOVkBB0DRUyN3lieAWqw&_nc_zt=23&_nc_ht=scontent.fpuq4-1.fna&_nc_gid=OX9IhXEMWEhGqbXlyuV4jw&oh=00_Afbqcp1n5aa2h0dfBUB4_wMeu_MIY8gXqnQzQw7LY_ndLQ&oe=68CE1172",
    alt: "Logo de Buses Fernandez",
  },
  {
    name: "INGENIERIA MACASING SPA",
    src: "https://cdnimg.bnamericas.com/aRvgwAiBBPyOlcMNtjtLWUmNGfWIPhwvviFbgWEvPnuXfhSiGOrpgxsceqqnJJkL.png",
    alt: "Logo Ingenieria Macasing Spa",
  },
  {
    name: "Turismo Roca",
    src: "https://elbienmag.cl/wp-content/uploads/logo-turismo-roca-1-2-300x180.jpg",
    alt: "Turismo Roca",
  },
  {
    name: "La Hermandad",
    src: "https://www.espaciourbano.cl/storage/images/LOGO-La-Hermandad-20230303131342.jpg",
    alt: "La Hermandad",
  },
  {
    name: "Spartan Magallanes Spa",
    src: "https://conveniomarco.mercadopublico.cl/media/avatar/Logo_Spartan.gif",
    alt: "Spartan Magallanes",
  },
  {
    name: "Comercial la Luna",
    src: "https://qr.recafy.com/media/portadas/2392/20230317_182939.jpg",
    alt: "La Luna",
  },

  // Agrega más empresas aquí
];

const TrustedBy = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = 220; // Ajusta según el tamaño de los logos
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-16 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-muted-foreground text-lg font-medium mb-8">
            Empresas que confían en nosotros
          </h3>
          <div className="relative">
            <button
              aria-label="Anterior"
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-card rounded-full shadow p-2 hover:bg-primary/10 transition"
              onClick={() => scroll("left")}
              style={{ display: "block" }}
            >
              <svg width="24" height="24" fill="none" stroke="currentColor">
                <path
                  d="M15 18l-6-6 6-6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div
              ref={carouselRef}
              className="flex overflow-x-auto gap-8 no-scrollbar px-12"
              style={{ scrollBehavior: "smooth" }}
            >
              {companyLogos.map((company, idx) => (
                <div
                  key={company.name}
                  className="flex-shrink-0 flex items-center justify-center bg-card rounded-lg shadow-card p-4"
                  style={{ width: 180, height: 100 }}
                  title={company.name}
                >
                  <img
                    src={company.src}
                    alt={company.alt}
                    className="object-contain h-16 w-32 grayscale hover:grayscale-0 transition"
                    style={{ maxHeight: 64, maxWidth: 128 }}
                  />
                </div>
              ))}
            </div>
            <button
              aria-label="Siguiente"
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-card rounded-full shadow p-2 hover:bg-primary/10 transition"
              onClick={() => scroll("right")}
              style={{ display: "block" }}
            >
              <svg width="24" height="24" fill="none" stroke="currentColor">
                <path
                  d="M9 6l6 6-6 6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="text-center">
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Mas de 15 empresas regionales confían en nuestras soluciones
            tecnológicas para mantener sus operaciones funcionando sin
            interrupciones.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
