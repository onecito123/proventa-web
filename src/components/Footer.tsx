import { Separator } from "@/components/ui/separator";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Linkedin,
  Twitter,
  Facebook,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span className="text-xl font-bold">Proventa</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Somos tu aliado Tecnologico en Magallanes. Más de 20 años de
              experiencia dando soporte técnico e informático las empresas de
              Punta Arenas.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-smooth"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-smooth"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-smooth"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-6">Servicios</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-primary transition-smooth"
                >
                  Soporte Técnico Lunes a Viernes
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-primary transition-smooth"
                >
                  Soporte y Mantenimiento
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-primary transition-smooth"
                >
                  Limpieza de equipos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-primary transition-smooth"
                >
                  Asistencia y Consultoría
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-primary transition-smooth"
                >
                  Mantenimiento Preventivo
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-6">Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="text-primary mt-1 flex-shrink-0" size={20} />
                <div className="text-gray-300">
                  <div>Av. Santos Mardones #272 </div>
                  <div>Punta Arenas, Chile</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="text-primary flex-shrink-0" size={20} />
                <div className="text-gray-300">+569 97267744</div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="text-primary flex-shrink-0" size={20} />
                <div className="text-gray-300">comercial@proventa.net</div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="text-primary mt-1 flex-shrink-0" size={20} />
                <div className="text-gray-300">
                  <div>Lun - Vie: 9:00 AM - 7:00 PM</div>
                  <div>Soporte 8/5 disponible</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            © 2024 Proventa. Todos los derechos reservados.
          </div>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-primary transition-smooth">
              Política de Privacidad
            </a>
            <a href="#" className="hover:text-primary transition-smooth">
              Términos de Servicio
            </a>
            <a href="#" className="hover:text-primary transition-smooth">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
