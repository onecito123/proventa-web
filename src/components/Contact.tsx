import { ContactCard } from "@/components/ui/contact-card";
import { MailIcon, PhoneIcon, MapPinIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section id="contacto" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          <ContactCard
            title="Agenda una consultoria"
            description="Si tienes alguna pregunta sobre nuestros servicios o necesitas ayuda, completa el formulario aquí."
            contactInfo={[
              {
                icon: MailIcon,
                label: "Email",
                value: "comercial@proventa.net",
              },
              {
                icon: PhoneIcon,
                label: "Teléfono",
                value: "+569 97267744",
              },

              {
                icon: MapPinIcon,
                label: "Dirección",
                value: "Punta Arenas, Chile",
                className: "col-span-2",
              },
            ]}
          >
            <form action="" className="w-full space-y-4">
              <div className="flex flex-col gap-2">
                <Label>Nombre</Label>
                <Input type="text" placeholder="Tu nombre completo" />
              </div>
              <div className="flex flex-col gap-2">
                <Label>Empresa</Label>
                <Input type="text" placeholder="Nombre de tu empresa" />
              </div>
              <div className="flex flex-col gap-2">
                <Label>Email</Label>
                <Input type="email" placeholder="tu@email.com" />
              </div>
              <div className="flex flex-col gap-2">
                <Label>Teléfono</Label>
                <Input type="tel" placeholder="+569 XXXXXXXX" />
              </div>

              <div className="flex flex-col gap-2">
                <Label>Mensaje</Label>
                <Textarea placeholder="Describe tu consulta o solicitud..." />
              </div>
              <Button className="w-full" type="submit">
                Enviar Mensaje
              </Button>
            </form>
          </ContactCard>
        </div>
      </div>
    </section>
  );
};

export default Contact;
